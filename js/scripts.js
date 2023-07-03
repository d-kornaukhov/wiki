window.addEventListener('load', function () {
	const codeList = document.querySelector('.code__list')
	const navList = document.querySelector('.header__list')

	// Создание элементов

	const createEl = (tag, classes, text, innerHTML, id) => {
		const el = document.createElement(tag)
		if (classes) el.classList.add(...classes.split(' '))
		if (text) el.textContent = text
		if (innerHTML) el.innerHTML = innerHTML
		if (id) el.setAttribute('id', id)
		return el
	}

	const createCodeItem = ({ subtitle, code }) => {
		const codeItem = createEl('div', 'code__item-block')
		const codeExample = createEl('div', 'code__example', null, code)
		const textArea = createEl('textarea', null, code)
		const subtitleEl = createEl('h4', 'subtitle', subtitle)
		const button = createEl('button', 'btn-clipboard', 'copy')

		const codeItemContainer = createEl('div', 'code__item-container')

		codeItemContainer.appendChild(subtitleEl)
		codeItemContainer.appendChild(codeExample)
		codeItemContainer.appendChild(textArea)
		codeItemContainer.appendChild(button)

		button.addEventListener('click', () => {
			const textAreaCopy = textArea.innerHTML
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>')
			clipboard.writeText(textAreaCopy)
		})

		codeItem.appendChild(codeItemContainer)

		return codeItem
	}

	const saveComponentsToLocalStorage = () => {
		localStorage.setItem('components', JSON.stringify(components))
	}

	components.forEach(component => {
		const { title, items } = component

		const wrapper = createEl('div', `code__item code__item--${title}`)
		wrapper.setAttribute('id', title)

		const titleEl = createEl('h2', 'title', title)
		wrapper.appendChild(titleEl)

		codeList.appendChild(wrapper)

		if (items) {
			items.forEach(item => {
				const codeItem = createCodeItem(item)
				wrapper.appendChild(codeItem)
			})
		} else {
			const codeItem = createCodeItem(component)
			wrapper.appendChild(codeItem)
			wrapper.classList.add('code__item-single')
		}
	})

	// Изменение текста на кнопке при копировании

	const buttons = document.querySelectorAll('.btn-clipboard')

	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			setTimeout(() => {
				btn.textContent = 'copied'
			}, 500)

			setTimeout(() => {
				btn.textContent = 'copy'
			}, 1500)
		})
	})

	// Создание навигации

	components.forEach(component => {
		if (component.title) {
			const navItem = document.createElement('li')
			const navLink = document.createElement('a')
			navLink.textContent = component.title
			navItem.classList.add('header__item')
			navLink.classList.add('header__link')
			navItem.dataset.section = component.title
			navLink.setAttribute('href', `#${component.title}`)
			navItem.appendChild(navLink)
			navList.appendChild(navItem)
		}
	})

	// Плавный скролл до категорий

	document.querySelectorAll('.header__link').forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault()

			const href = this.getAttribute('href').substring(1)
			const scrollTarget = document.getElementById(href)
			const elementPosition = scrollTarget.getBoundingClientRect().top
			const offsetPosition = elementPosition - headerHeight()

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth',
			})
		})
	})

	// Функция определения высоты хедера

	const headerHeight = () => {
		const header = document.querySelector('.header')
		return header.offsetHeight
	}

	// Активация навигации при скролле

	const navInit = () => {
		const navLinks = document.querySelectorAll('.header__link')
		const items = document.querySelectorAll('.code__item')
		items.forEach(item => {
			if (window.pageYOffset >= item.offsetTop - headerHeight()) {
				navLinks.forEach(navLink => {
					if (navLink.innerHTML === item.id) {
						navLink.classList.add('active')
					} else {
						navLink.classList.remove('active')
					}
				})
			}
		})
	}

	navInit()

	saveComponentsToLocalStorage()

	window.addEventListener('scroll', navInit)
})
