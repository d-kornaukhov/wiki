window.addEventListener("load", function () {
	const codeList = document.querySelector(".code__list")
	const navList = document.querySelector(".header__list")

	// Создание навигации

	components.map(component => {
		if (component && component.title) {
			const navItem = document.createElement("li")
			const navLink = document.createElement("a")
			navLink.textContent = component.title
			navItem.classList.add("header__item")
			navLink.classList.add("js-scroll")
			navItem.dataset.section = component.title
			navLink.setAttribute("href", `#${component.title}`)
			navItem.appendChild(navLink)
			navList.appendChild(navItem)
			if (component.id === "styles") {
				navItem.classList.add("active")
			}
		}
	})

	// Создание эллементов

	const createEl = (tag, classes, text, innerHTML, id) => {
		const el = document.createElement(tag)
		if (classes) el.classList.add(...classes.split(" "))
		if (text) el.textContent = text
		if (innerHTML) el.innerHTML = innerHTML
		if (id) el.setAttribute("id", id)
		return el
	}

	const createCodeItem = ({ code, title, subtitle, id }) => {
		let codeItem = createEl("div", "code__item", null, null, id)

		let codeExample = createEl("div", "code__example", code, code)
		const textArea = createEl("textarea", null, code)
		const subtitleEl = createEl("h4", "subtitle", subtitle)
		const titleEl = createEl("h2", "title", title)
		const button = createEl("button", "btn-clipboard", "copy")

		switch (id) {
			case "columns":
				codeExample = createEl(
					"div",
					"code__example code__example--columns",
					code,
					code
				)
				break

			case "styles":
				codeItem = createEl(
					"div",
					"code__item code__item--styles",
					null,
					null,
					id
				)
				break

			default:
				break
		}

		titleEl.setAttribute("id", id)

		codeItem.appendChild(subtitleEl)
		codeItem.appendChild(codeExample)
		codeItem.appendChild(textArea)
		codeItem.appendChild(button)

		button.addEventListener("click", () => {
			const textAreaCopy = textArea.innerHTML
				.replace(/&lt;/g, "<")
				.replace(/&gt;/g, ">")
			clipboard.writeText(textAreaCopy)
		})

		return { codeItem, titleEl }
	}

	components.map(component => {
		const { codeItem, titleEl } = createCodeItem(component)
		codeList.appendChild(codeItem)
		codeItem.parentElement.insertBefore(titleEl, codeItem)
	})

	// Изменение текста на кнопке при копировании

	const buttons = document.querySelectorAll(".btn-clipboard")

	buttons.forEach(btn => {
		btn.addEventListener("click", () => {
			setTimeout(() => {
				btn.textContent = "copied"
			}, 500)

			setTimeout(() => {
				btn.textContent = "copy"
			}, 1500)
		})
	})

	// Плавный скролл до категорий

	document.querySelectorAll(".js-scroll").forEach(link => {
		link.addEventListener("click", function (e) {
			e.preventDefault()

			const href = this.getAttribute("href").substring(1),
				scrollTarget = document.getElementById(href),
				elementPosition = scrollTarget.getBoundingClientRect().top,
				offsetPosition = elementPosition - headerHeight()

			window.scrollBy({
				top: offsetPosition,
				behavior: "smooth",
			})
		})
	})

	// Активный класс навигации при скролле до блока

	const navInit = () => {
		const navItems = document.querySelectorAll(".header__item")
		const items = document.querySelectorAll(".code__item")
		items.forEach(item => {
			if (window.pageYOffset >= item.offsetTop - headerHeight() - 80) {
				navItems.forEach(navItem => {
					if (navItem.dataset.section === item.id) {
						navItem.classList.add("active")
					} else {
						navItem.classList.remove("active")
					}
				})
			}
		})
	}

	navInit()

	window.addEventListener("scroll", () => {
		navInit()
	})

	function headerHeight() {
		return (topOffset = document.querySelector(".header").offsetHeight)
	}
})
