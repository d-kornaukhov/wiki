const components = [
	{
		title: 'styles',
		code: `* {
			padding: 0;
			margin: 0;
			font-family: 'YS Text', Arial, Helvetica, sans-serif;
			font-size: 18px;
			line-height: 25px;
			box-sizing: border-box;
		}
		
		table {
			width: 100%;
			border: 0px;
			border-collapse: separate;
		}
		
		table,
		tr,
		td {
			border: none !important;
		}
		
		img {
			display: block;
		}
		
		/* Heading */
		.h-main {
			font-family: 'YS Display', Arial, Helvetica, sans-serif;
			font-size: 64px;
			line-height: 100%;
			font-weight: 700;
		}
		
		h1 {
			font-size: 48px;
			line-height: 120%;
			font-weight: 700;
		}
		
		h2 {
			font-size: 32px;
			line-height: 120%;
			font-weight: 700;
		}
		
		h3 {
			font-size: 24px;
			line-height: 120%;
			font-weight: 700;
		}
		
		h4 {
			font-size: 20px;
			line-height: 120%;
			font-weight: 700;
		}
		
		/* Paragraph */
		.p1-bold {
			font-size: 18px;
			line-height: 25px;
			font-weight: 700;
		}
		.p1 {
			font-size: 18px;
			line-height: 25px;
			font-weight: 400;
		}
		.p2-bold {
			font-size: 16px;
			line-height: 22px;
			font-weight: 700;
		}
		.p2 {
			font-size: 16px;
			line-height: 22px;
			font-weight: 400;
		}
		
		.bold {
			font-weight: 700 !important;
		}
		
		/* Link */
		a {
			color: rgba(54, 62, 69, 0.64);
			text-decoration: underline;
		}
		
		.underline {
			text-decoration: underline;
		}
		
		.underline-none {
			text-decoration: none !important;
		}
		
		.inherit {
			color: inherit !important;
		}
		
		/* border-radius */
		.radius8 {
			border-radius: 8px;
		}
		
		.radius16 {
			border-radius: 16px;
		}
		
		.radius50 {
			border-radius: 50%;
		}
		
		/* Floating */
		.fright {
			float: right;
		}
		.fleft {
			float: left;
		}
		.clear {
			clear: both;
		}
		
		/* Verical Align */
		.va-top {
			vertical-align: top;
		}
		.va-middle {
			vertical-align: middle;
		}
		.va-bottom {
			vertical-align: bottom;
		}
		
		/* Margins */
		/* Top */
		
		.mt64 {
			margin-top: 64px !important;
		}
		.mt48 {
			margin-top: 48px !important;
		}
		.mt40 {
			margin-top: 40px !important;
		}
		.mt32 {
			margin-top: 32px !important;
		}
		
		.mt24 {
			margin-top: 24px !important;
		}
		
		.mt16 {
			margin-top: 16px !important;
		}
		
		.mt8 {
			margin-top: 8px !important;
		}
		
		.mt0 {
			margin-top: 0 !important;
		}
		
		/* Left */
		
		.ml64 {
			margin-left: 64px !important;
		}
		.ml48 {
			margin-left: 48px !important;
		}
		.ml40 {
			margin-left: 40px !important;
		}
		.ml32 {
			margin-left: 32px !important;
		}
		
		.ml24 {
			margin-left: 24px !important;
		}
		
		.ml16 {
			margin-left: 16px !important;
		}
		
		.ml8 {
			margin-left: 8px !important;
		}
		
		.ml0 {
			margin-left: 0 !important;
		}
		
		/* Right */
		
		.mr64 {
			margin-right: 64px !important;
		}
		.mr48 {
			margin-right: 48px !important;
		}
		.mr40 {
			margin-right: 40px !important;
		}
		.mr32 {
			margin-right: 32px !important;
		}
		
		.mr24 {
			margin-right: 24px !important;
		}
		
		.mr16 {
			margin-right: 16px !important;
		}
		
		.mr8 {
			margin-right: 8px !important;
		}
		
		.mr0 {
			margin-right: 0 !important;
		}
		
		/* Bottom */
		
		.mb64 {
			margin-bottom: 64px !important;
		}
		.mb48 {
			margin-bottom: 48px !important;
		}
		.mb40 {
			margin-bottom: 40px !important;
		}
		.mb32 {
			margin-bottom: 32px !important;
		}
		
		.mb24 {
			margin-bottom: 24px !important;
		}
		
		.mb16 {
			margin-bottom: 16px !important;
		}
		
		.mb8 {
			margin-bottom: 8px !important;
		}
		
		.mb0 {
			margin-bottom: 0 !important;
		}
		
		/* Margin all */
		
		.m64 {
			margin: 64px;
		}
		.m48 {
			margin: 48px;
		}
		.m40 {
			margin: 40px;
		}
		.m32 {
			margin: 32px;
		}
		
		.m24 {
			margin: 24px;
		}
		
		.m16 {
			margin: 16px;
		}
		
		.m8 {
			margin: 8px;
		}
		
		.m0 {
			margin: 0 !important;
		}
		
		/* Paddings */
		/* Padding all */
		.pad0 {
			padding: 0px;
		}
		.pad8 {
			padding: 8px;
		}
		
		.pad16 {
			padding: 16px;
		}
		
		.pad24 {
			padding: 24px;
		}
		
		.pad32 {
			padding: 32px;
		}
		.pad40 {
			padding: 40px;
		}
		.pad48 {
			padding: 48px;
		}
		.pad64 {
			padding: 64px;
		}
		
		/* Padding left */
		.padl0 {
			padding-left: 0px;
		}
		.padl8 {
			padding-left: 8px;
		}
		
		.padl16 {
			padding-left: 16px;
		}
		
		.padl24 {
			padding-left: 24px;
		}
		
		.padl32 {
			padding-left: 32px;
		}
		.padl40 {
			padding-left: 40px;
		}
		.padl48 {
			padding-left: 48px;
		}
		.padl64 {
			padding-left: 64px;
		}
		
		/* Padding right */
		.padr0 {
			padding-right: 0px;
		}
		.padr8 {
			padding-right: 8px;
		}
		
		.padr16 {
			padding-right: 16px;
		}
		
		.padr24 {
			padding-right: 24px;
		}
		
		.padr32 {
			padding-right: 32px;
		}
		.padr40 {
			padding-right: 40px;
		}
		.padr48 {
			padding-right: 48px;
		}
		.padr64 {
			padding-right: 64px;
		}
		
		/* Padding top */
		.padt0 {
			padding-top: 0px;
		}
		.padt8 {
			padding-top: 8px;
		}
		
		.padt16 {
			padding-top: 16px;
		}
		
		.padt24 {
			padding-top: 24px;
		}
		
		.padt32 {
			padding-top: 32px;
		}
		.padt40 {
			padding-top: 40px;
		}
		.padt48 {
			padding-top: 48px;
		}
		.padt64 {
			padding-top: 64px;
		}
		
		/* Padding bottom */
		.padb0 {
			padding-bottom: 0px;
		}
		.padb8 {
			padding-bottom: 8px;
		}
		
		.padb16 {
			padding-bottom: 16px;
		}
		
		.padb24 {
			padding-bottom: 24px;
		}
		
		.padb32 {
			padding-bottom: 32px;
		}
		.padb40 {
			padding-bottom: 40px;
		}
		.padb48 {
			padding-bottom: 48px;
		}
		.padb64 {
			padding-bottom: 64px;
		}
		
		/* Width */
		.w100 {
			width: 100%;
		}
		.w90 {
			width: 90%;
		}
		.w80 {
			width: 80%;
		}
		.w75 {
			width: 75%;
		}
		
		.w745 {
			width: 74.5%;
		}
		
		.w74 {
			width: 74%;
		}
		.w70 {
			width: 70%;
		}
		.w66 {
			width: 66%;
		}
		.w50 {
			width: 50%;
		}
		.w495 {
			width: 49.5%;
		}
		.w49 {
			width: 49%;
		}
		.w45 {
			width: 45%;
		}
		.w33 {
			width: 33%;
		}
		.w325 {
			width: 32.5%;
		}
		.w30 {
			width: 30%;
		}
		.w25 {
			width: 25%;
		}
		.w245 {
			width: 24.5%;
		}
		.w24 {
			width: 24%;
		}
		.w20 {
			width: 20%;
		}
		.w19 {
			width: 19%;
		}
		
		.w16 {
			width: 16%;
		}
		
		.w15 {
			width: 15%;
		}
		.w13 {
			width: 13%;
		}
		.w115 {
			width: 11.5%;
		}
		.w10 {
			width: 10%;
		}
		
		.w16px {
			width: 16px;
			max-width: 16px;
			min-width: 16px;
		}
		
		.w24px {
			width: 24px;
			max-width: 24px;
			min-width: 24px;
		}
		
		.w270px {
			width: 270px;
		}
		
		.w0 {
			width: 0;
		}
		/* Addiction you width */
		
		/* Colors */
		.c-black {
			color: #000;
		}
		
		.c-white {
			color: #fff;
		}
		
		.c-text {
			color: #363e45;
		}
		
		.c-text-64 {
			color: rgba(54, 62, 69, 0.64);
		}
		
		.c-gray {
			color: #363e45a3;
		}
		
		.c-gray-light {
			color: rgba(152, 163, 174, 0.64);
		}
		
		.c-link {
			color: #358fe9;
		}
		
		.c-yellow {
			color: #ffdd33;
		}
		
		.cpb {
			opacity: 0.7;
		}
		
		/* Background */
		.bg-white {
			background-color: #ffffff;
			border-radius: 1px solid rgba(152, 163, 174, 0.48);
		}
		
		.bg-gray {
			background-color: #f4f5f6;
		}
		
		.bg-red {
			background-color: #fce4e4;
		}
		
		.bg-green {
			background-color: #d9f4ef;
		}
		
		.bg-green-contacts {
			background-color: #00b377;
		}
		
		.bg-blue {
			background-color: #e2effc;
		}
		
		.bg-orange {
			background-color: #ffd6c8;
		}
		
		.bg-purple {
			background-color: #efe7fc;
		}
		
		/* Arrow */
		.arrow-l {
			border-left: 1px solid rgba(0, 0, 0, 0.7);
			border-bottom: 1px solid rgba(0, 0, 0, 0.7);
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
		}
		
		.arrow-l-h1 {
			border-left: 1px solid rgba(0, 0, 0, 0.7);
			border-bottom: 1px solid rgba(0, 0, 0, 0.7);
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
			margin-top: 13px;
		}
		
		.arrow-l-h2 {
			border-left: 1px solid rgba(0, 0, 0, 0.7);
			border-bottom: 1px solid rgba(0, 0, 0, 0.7);
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
			margin-top: 9px;
		}
		
		.arrow-l-h3 {
			border-left: 1px solid rgba(0, 0, 0, 0.7);
			border-bottom: 1px solid rgba(0, 0, 0, 0.7);
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
			margin-top: 6px;
		}
		
		.arrow-l-h4 {
			border-left: 1px solid rgba(0, 0, 0, 0.7);
			border-bottom: 1px solid rgba(0, 0, 0, 0.7);
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
			margin-top: 3px;
		}
		
		/* как отступы с загаловками в стилях */
		.arrow-s {
			border-left: 1px solid rgba(0, 0, 0, 0.7);
			border-bottom: 1px solid rgba(0, 0, 0, 0.7);
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 8px;
			height: 8px;
		}
		
		/* Dropdown */
		::-webkit-details-marker {
			display: none;
		}
		summary.pseudo {
			display: none;
		}
		summary {
			list-style: none;
		}
		details summary::marker, /* Latest Chrome, Edge, Firefox */ 
		details summary::-webkit-details-marker /* Safari */ {
			display: none;
		}
		.summary-custom {
			margin: 0px;
			max-height: 80px;
		}
		.details-content {
			margin-top: 24px;
		}
		
		.wiki-cut__summary {
			color: inherit;
		}
		.hr {
			margin: 24px 0;
			height: 1px;
			background-color: rgba(152, 163, 174, 0.48);
		}
		
		/* Addiction width */
		.container-mobile {
			max-width: 360px;
			margin: 0 auto;
		}
		.container {
			max-width: 1280px;
			margin: 0 auto;
		}
		
		.border-gray {
			border: 1px solid #363d44;
		}
		
		.border-gray-light {
			border: 1px solid rgba(152, 163, 174, 0.48);
		}
		
		/* Addiction v1.2 */
		.h1px {
			height: 1px;
		}
		
		.h8 {
			height: 8px;
		}
		
		.h12 {
			height: 12px !important;
		}
		
		.h16 {
			height: 16px !important;
		}
		
		.h24 {
			height: 24px !important;
		}
		
		.h32 {
			height: 32px !important;
		}
		.h40 {
			height: 40px !important;
		}
		.h48 {
			height: 48px !important;
		}
		.h64 {
			height: 64px !important;
		}
		.h80 {
			height: 80px !important;
		}
		.h88 {
			height: 88px !important;
		}
		.h96 {
			height: 96px !important;
		}
		.h110 {
			height: 110px !important;
		}
		
		.h150 {
			height: 150px !important;
		}
		
		.h336 {
			height: 336px !important;
		}
		
		.h100p {
			height: 100% !important;
		}
		
		.bg-center {
			background-position: center;
			background-size: cover;
		}
		
		/* Displays */
		
		.d-none {
			display: none !important;
		}
		.d-inline {
			display: inline !important;
		}
		.d-inline-block {
			display: inline-block !important;
		}
		.d-block {
			display: block !important;
		}
		.d-table {
			display: table !important;
		}
		.d-table-row {
			display: table-row !important;
		}
		.d-table-cell {
			display: table-cell !important;
		}
		
		.ta-left {
			text-align: left;
		}
		.ta-center {
			text-align: center;
		}
		.ta-right {
			text-align: right;
		}
		
		/* Logo sizes */
		
		.l125 {
			width: 210px !important;
			height: 50px !important;
		}
		.l1 {
			width: 168px !important;
			height: 40px !important;
		}
		.l075 {
			width: 126px !important;
			height: 30px !important;
		}
		.l05 {
			width: 84px !important;
			height: 20px !important;
		}
		
		/* list */
		ul {
			list-style-type: none;
		}
		
		.list-num {
			list-style-type: decimal;
			margin-left: 18px;
		}
		
		.list-dot {
			list-style-type: disc;
			margin-left: 18px;
		}
		
		.list-none {
			list-style-type: none;
		}
		
		/* banners */
		
		.banner {
			width: 100%;
			background-image: url(https://wiki.yandex-team.ru/users/yulia-tsekh/test-new-guide/.files/banner.png);
			background-color: #999;
			background-position: left center;
			background-size: cover;
			background-repeat: no-repeat;
			border-radius: 16px;
		}
		
		.banner-right {
			background: #f4f5f6;
			border-radius: 16px;
		}
		
		/* navigartion */
		
		.nav-item {
			background: #eff0f2;
			color: #363e45;
			font-weight: 700;
			border-radius: 16px;
			text-align: center;
			padding: 13px 0;
		}
		
		.nav-item--active {
			background: rgba(152, 163, 174, 0.64);
		}
		
		.btn {
			width: 260px;
			display: block;
			background-color: #ffdd33;
			color: #000;
			border-radius: 8px;
			padding: 12px 0;
			font-size: 16px;
			line-height: 140%;
			text-align: center;
			text-decoration: none;
			font-weight: 700;
			cursor: pointer;
		}
		`,
	},
	{
		title: 'banner',
		items: [
			{
				subtitle: 'banner 100%',
				code: `<table class="banner c-text h336" cellspacing="0" cellpadding="0">
			<tr class="va-top">
				<td>
					<div class="m16">
						<h1 class="h-main">Заголовок</h1>
					</div>
				</td>
			</tr>
			<tr class="va-bottom h1px">
				<td>
					<p class="p2 m16">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, nulla? Placeat nostrum numquam,
						necessitatibus veritatis quia quidem atque!
					</p>
				</td>
			</tr>
		</table>`,
			},
			{
				subtitle: 'banner 75%',
				code: `<table class="c-text" cellspacing="0" cellpadding="0">
			<tr>
				<td class="w75">
					<table class="banner h336">
						<tr class="va-top">
							<td>
								<div class="m16">
									<h1 class="h-main">Заголовок</h1>
								</div>
							</td>
						</tr>
						<tr class="va-bottom h1px">
							<td>
								<p class="p2 m16">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, nulla? Placeat nostrum numquam,
									necessitatibus veritatis quia quidem atque!
								</p>
							</td>
						</tr>
					</table>
				</td>
				<td class="w24px"></td>
				<td class="w25 va-top">
					<table class="banner-right h336">
						<tr class="va-top">
							<td>
								<div class="m16 mb0 w270px">
									<h3>Заголовок</h3>
									<h4 class="mt16">Подзаголовок</h4>
									<ul class="mt16 list-none c-text-64">
										<li>
											<a class="p2 inherit" href="#" target="_blank">link 1</a>
										</li>
										<li class="mt16">
											<a class="p2 inherit" href="#" target="_blank">link 2</a>
										</li>
										<li class="mt16">
											<a class="p2 inherit" href="#" target="_blank">link 3</a>
										</li>
									</ul>
								</div>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>`,
			},
			{
				subtitle: 'banner medium',
				code: `<table class="banner h150 c-text" cellspacing="0" cellpadding="0">
			<tr>
				<td class="va-middle">
					<div class="m16">
						<h2>Заголовок</h2>
					</div>
				</td>
			</tr>
		</table>`,
			},
			{
				subtitle: 'banner + button',
				code: `
		<table class="banner h80" cellspacing="0" cellpadding="0">
			<tr>
				<td class="va-middle">
					<h3 class="ml16 c-text">Заголовок</h3>
				</td>
				<td class="va-middle">
					<a class="fright mr16 btn" href="#" target="_blank">Кнопка</a>
				</td>
			</tr>
		</table>
		`,
			},
		],
	},
	{
		title: 'grid',
		items: [
			{
				subtitle: 'grid 2 columns',
				code: `<table cellspacing="0" cellpadding="0">
				<tr>
					<td class='w50 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w50 va-top'>content</td>
				</tr>
			</table>`,
			},
			{
				subtitle: 'grid 3 columns',
				code: `<table cellspacing="0" cellpadding="0">
				<tr>
					<td class='w33 va-top'>content</td>
					<td class="w24px">
					<td class='w33 va-top'>content</td>
					<td class="w24px">
					<td class='w33 va-top'>content</td>
				</tr>
			</table>`,
			},
			{
				subtitle: 'grid 4 columns',
				code: `<table cellspacing="0" cellpadding="0">
				<tr>
					<td class='w25 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w25 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w25 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w25 va-top'>content</td>
				</tr>
			</table>`,
			},
			{
				subtitle: 'grid 5 columns',
				code: `<table cellspacing="0" cellpadding="0">
				<tr>
					<td class='w20 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w20 va-top '>content</td>
					<td class="w24px"></td>
					<td class='w20 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w20 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w20 va-top'>content</td>
				</tr>
			</table>`,
			},
			{
				subtitle: 'grid 6 columns',
				code: `<table cellspacing="0" cellpadding="0">
				<tr>
					<td class='w16 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w16 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w16 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w16 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w16 va-top'>content</td>
					<td class="w24px"></td>
					<td class='w16 va-top'>content</td>
				</tr>
			</table>`,
			},
		],
	},
	{
		title: 'navigation',
		items: [
			{
				subtitle: 'navigation tabs',
				example: `
				<table cellspacing="0" cellpadding="0">
				<tr>
					<td class="w24">
						<a class="inherit underline-none" href="#">
							<div class="nav-item nav-item--active">
								<p class="p2 bold">nav 1</p>
							</div>
						</a>
					</td>
					<td class="w24px"></td>
					<td class="w24">
						<a class="inherit underline-none" href="#">
							<div class="nav-item">
								<p class="p2 bold">nav 2</p>
							</div>
						</a>
					</td>
					<td class="w24px"></td>
					<td class="w24">
						<a class="inherit underline-none" href="#">
							<div class="nav-item">
								<p class="p2 bold">nav 3</p>
							</div>
						</a>
					</td>
					<td class="w24px"></td>
					<td class="w24">
						<a class="inherit underline-none" href="#">
							<div class="nav-item">
								<p class="p2 bold">nav 4</p>
							</div>
						</a>
					</td>
				</tr>
			</table>
				`,
				code: `	<a class=' inherit underline-none' href='#'>
				<div class='nav-item nav-item--active'>
					<p class='p2 bold'>nav 1</p>
				</div>
			</a>`,
			},
			{
				subtitle: 'navigation banner',
				code: `<table class='c-text' cellspacing="0" cellpadding="0">
				<tr>
					<td class='w50'>
						<table class='banner h336'>
							<tr class='va-top'>
								<td>
									<div class='m16'>
										<h1 class='h-main'>Заголовок</h1>
									</div>
								</td>
							</tr>
							<tr class='va-bottom h1px'>
								<td>
									<p class='p2 ml16 mb16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								</td>
							</tr>
						</table>
					</td>
					<td class='w24px'></td>
					<td class='w50 va-top'>
						<table class='banner-right h336' cellspacing="0" cellpadding="0">
							<tr class='va-top'>
								<td>
									<table>
										<tr>
											<td>
												<h4 class='mt16 ml16 c-text'>Заголовок</h4>
											</td>
										</tr>
										<tr>
											<td class='w50 va-top'>
												<div class='ml16 mt16 c-text'>
													<p class='p2 mt16'>Подзаголовок</p>
													<ul class='mt16 list-none c-text-64'>
														<li>
															<a class='p2 inherit' href='#' target='_blank'>link 1</a>
														</li>
														<li class='mt8'>
															<a class='p2 inherit' href='#' target='_blank'>link 2</a>
														</li>
														<li class='mt8'>
															<a class='p2 inherit' href='#' target='_blank'>link 3</a>
														</li>
													</ul>
												</div>
											</td>
											<td class='w24px'></td>
											<td class='w50 va-top'>
												<div class='mt16 c-text'>
													<p class='p2 mt16'>Подзаголовок</p>
													<ul class='mt16 list-none c-text-64'>
														<li>
															<a class='p2 inherit' href='#' target='_blank'>link 1</a>
														</li>
														<li class='mt8'>
															<a class='p2 inherit' href='#' target='_blank'>link 2</a>
														</li>
														<li class='mt8'>
															<a class='p2 inherit' href='#' target='_blank'>link 3</a>
														</li>
													</ul>
												</div>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
				`,
			},
		],
	},
	{
		title: 'cut',
		items: [
			{
				subtitle: 'cut H1 100% width',
				code: `	<details class="w100 mt24">
				<summary class="wiki-cut__summary">
					<h1 class="fleft">Details</h1>
					<div class="fright arrow-l-h1"></div>
					<div class="clear"></div>
				</summary>
	
				<!-- Добавить свой идентификатор, что бы пользователь проваливался сюда -->
				<div id="1" name="1"></div>
				<div class="details-content">
					content
				</div>
			</details>
			<div class="hr mt24"></div>`,
			},
			{
				subtitle: 'Cut H2 100% width',
				code: `<details class="w100 mt24">
				<summary class="wiki-cut__summary">
					<h2 class="fleft">Details</h2>
					<div class="fright arrow-l-h2"></div>
					<div class="clear"></div>
				</summary>
	
				<!-- Добавить свой идентификатор, что бы пользователь проваливался сюда -->
				<div id="1" name="1"></div>
				<div class="details-content">
					content
				</div>
			</details>
			<div class="hr mt24"></div>`,
			},
			{
				subtitle: 'Cut H3 100% width',
				code: `<details class="w100 mt24">
				<summary class="wiki-cut__summary">
					<h3 class="fleft">Details</h3>
					<div class="fright arrow-l-h3"></div>
					<div class="clear"></div>
				</summary>
	
				<!-- Добавить свой идентификатор, что бы пользователь проваливался сюда -->
				<div id="1" name="1"></div>
				<div class="details-content">
					content
				</div>
			</details>
			<div class="hr mt24"></div>`,
			},
			{
				subtitle: 'Cut H4 100% width',
				code: `<details class="w100 mt24">
				<summary class="wiki-cut__summary">
					<h4 class="fleft">Details</h4>
					<div class="fright arrow-l-h4"></div>
					<div class="clear"></div>
				</summary>
	
				<!-- Добавить свой идентификатор, что бы пользователь проваливался сюда -->
				<div id="1" name="1"></div>
				<div class="details-content">
					content
				</div>
			</details>
			<div class="hr mt24"></div>`,
			},
			{
				subtitle: 'Cut paragraph 100% width',
				code: `<details class="w100 mt24">
				<summary class="wiki-cut__summary">
					<p class="p1-bold fleft">Details</p>
					<div class="fright arrow-l"></div>
					<div class="clear"></div>
				</summary>
	
				<!-- Добавить свой идентификатор, что бы пользователь проваливался сюда -->
				<div id="1" name="1"></div>
				<div class="details-content">
					content
				</div>
			</details>
			<div class="hr mt24"></div>`,
			},
			{
				subtitle: 'H4 current width',
				code: `<details class="mt24">
				<summary class="wiki-cut__summary">
					<h4 class="fleft mr16">details</h4>
					<div class="fleft arrow-l-h4"></div>
					<div class="clear"></div>
				</summary>
	
				<!-- Добавить свой идентификатор, что бы пользователь проваливался сюда -->
				<div id="1" name="1"></div>
				<div class="details-content">
					content
				</div>
			</details>
			<div class="hr mt24"></div>`,
			},
		],
	},
	{
		title: 'cards',
		items: [
			{
				subtitle: 'team card',
				example: `<table cellspacing="0" cellpadding="0">
				<tr>
					<td class="w33">
						<table class="va-top" cellspacing="0" cellpadding="0">
							<tr>
								<td class='w0'>
									<img class="fleft radius50 bg-gray" src="" width="96" height="96" />
								</td>
								<td class='w16px'></td>
								<td class="va-middle">
									<div>
										<h3>Имя</h3>
										<p class="p1 c-text-64 mt8">Должность</p>
									</div>
								</td>
							</tr>
						</table>
					</td>
					<td class="w24px"></td>
					<td class="w33">
						<table class="va-top" cellspacing="0" cellpadding="0">
							<tr>
								<td class='w0'>
									<img class="fleft radius50 bg-gray" src="" width="96" height="96" />
								</td>
								<td class='w16px'></td>
								<td class="va-middle">
									<div>
										<h3>Имя</h3>
										<p class="p1 c-text-64 mt8">Должность</p>
									</div>
								</td>
							</tr>
						</table>
					</td>
					<td class="w24px"></td>
					<td class="w33">
						<table class="va-top" cellspacing="0" cellpadding="0">
							<tr>
								<td class='w0'>
									<img class="fleft radius50 bg-gray" src="" width="96" height="96" />
								</td>
								<td class='w16px'></td>
								<td class="va-middle">
									<div>
										<h3>Имя</h3>
										<p class="p1 c-text-64 mt8">Должность</p>
									</div>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>`,
				code: `
			<table class="va-top" cellspacing="0" cellpadding="0">
			<tr>
				<td class='w0'>
					<img class="fleft radius50 bg-gray" src="" width="96" height="96" />
				</td>
				<td class='w16px'></td>
				<td class="va-middle">
					<div>
						<h3>Имя</h3>
						<p class="p1 c-text-64 mt8">Должность</p>
					</div>
				</td>
			</tr>
		</table>
			`,
			},
			{
				subtitle: 'card text + img',
				example: `
					<table cellspacing="0" cellpadding="0">
					<tr>
						<td class="w50 va-top bg-gray radius16">
							<div class="pad16">
								<table style="height: 80px" cellspacing="0" cellpadding="0">
									<tr class="va-top">
										<td>
											<p class="fleft">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
										</td>
										<td class="va-bottom">
											<img class="fright bg-white radius50 ml16" src="" width="40" height="40" />
										</td>
									</tr>
								</table>
							</div>
						</td>
						<td class="w24px"></td>
						<td class="w50 va-top bg-gray radius16">
							<div class="pad16">
								<table style="height: 80px" cellspacing="0" cellpadding="0">
									<tr class="va-top">
										<td>
											<p class="fleft">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
												adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
											</p>
										</td>
										<td class="va-bottom">
											<img class="fright bg-white radius50 ml16" src="" width="40" height="40" />
										</td>
									</tr>
								</table>
							</div>
						</td>
					</tr>
				</table>`,
				code: `
					<div class="pad16">
					<table style="height: 80px" cellspacing="0" cellpadding="0">
						<tr class="va-top">
							<td>
								<p class="fleft">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</td>
							<td class="va-bottom">
								<img class="fright bg-white radius50 ml16" src="" width="40" height="40" />
							</td>
						</tr>
					</table>
				</div>
			`,
			},
			{
				subtitle: 'card text + img',
				example: `
				<table cellspacing="0" cellpadding="0">
				<tr>
					<td class="w50 va-top bg-gray radius16">
						<div class="pad16">
							<table style="height: 200px" cellspacing="0" cellpadding="0">
								<tr class="va-top">
									<td>
										<h4 class="fleft">Заголовок</h4>
									</td>
									<td>
										<img class="fright bg-white radius50 ml16" src="" width="40" height="40" />
									</td>
								</tr>
								<tr class="va-bottom">
									<td class="va-bottom">
										<p>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius illo excepturi soluta deserunt,
											corrupti voluptatum quia, veritatis delectus vero consectetur et quibusdam dolores aspernatur!
											Vitae, unde. Repudiandae amet fugiat exercitationem.
										</p>
									</td>
								</tr>
							</table>
						</div>
					</td>
					<td class="w24px"></td>
					<td class="w50 va-top bg-gray radius16">
						<div class="pad16">
							<table style="height: 200px" cellspacing="0" cellpadding="0">
								<tr class="va-top">
									<td>
										<h4 class="fleft">Заголовок</h4>
									</td>
									<td>
										<img class="fright bg-white radius50 ml16" src="" width="40" height="40" />
									</td>
								</tr>
								<tr class="va-bottom">
									<td class="va-bottom">
										<p>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius illo excepturi soluta deserunt,
											corrupti voluptatum quia, veritatis delectus vero consectetur et quibusdam dolores aspernatur!
											Vitae, unde. Repudiandae amet fugiat exercitationem. corrupti voluptatum quia, veritatis delectus
										</p>
									</td>
								</tr>
							</table>
						</div>
					</td>
				</tr>
			</table>`,
				code: `
				<div class="pad16">
				<table style="height: 200px" cellspacing="0" cellpadding="0">
					<tr class="va-top">
						<td>
							<h4 class="fleft">Заголовок</h4>
						</td>
						<td>
							<img class="fright bg-white radius50 ml16" src="" width="40" height="40" />
						</td>
					</tr>
					<tr class="va-bottom">
						<td class="va-bottom">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius illo excepturi soluta deserunt,
								corrupti voluptatum quia, veritatis delectus vero consectetur et quibusdam dolores aspernatur!
								Vitae, unde. Repudiandae amet fugiat exercitationem.
							</p>
						</td>
					</tr>
				</table>
			</div>
			`,
			},
		],
	},
	{
		title: 'footer',
		items: [
			{
				subtitle: 'logo',
				code: `	<img class='l075' src='https://wiki.yandex-team.ru/static-files/.files/logo-ru-main.svg' />`,
			},
			{
				subtitle: 'contacts + logo',
				code: `<table cellspacing="0" cellpadding="0">
				<tr>
					<td class='w33'>
						<table class='bg-green-contacts h110 radius16 c-white'>
							<tr class='va-top'>
								<td>
									<h4 class='mt16 ml16'>Портал help@</h4>
								</td>
							</tr>
							<tr class='va-bottom h1px'>
								<td>
									<p class='p2 fleft m16'>мне нужна помощь</p>
								</td>
								<td class='va-bottom'>
									<img class='d-block m16 mt0 fright bg-white radius50' width='36' height='36' src=''>
								</td>
							</tr>
						</table>
					</td>
					<td class='w24px'></td>
					<td class='w33'>
						<table class='bg-gray h110 radius16'>
							<tr class='va-top'>
								<td>
									<h4 class='mt16 ml16 c-text'>Письмо на reception@</h4>
								</td>
							</tr>
							<tr class='va-bottom h1px'>
								<td>
									<p class='m16 mt0 fleft p2 c-text-64'>также номер 0 с внутреннего номера
									</p>
								</td>
								<td class='va-bottom'>
									<img class='d-block m16 mt0 fright bg-white radius50' width='36' height='36' src=''>
								</td>
							</tr>
						</table>
					</td>
					<td class='w24px'></td>
					<td class='w33'>
						<table class='bg-gray h110 radius16'>
							<tr class='va-top'>
								<td>
									<h4 class='mt16 ml16 c-text'>Приятное</h4>
								</td>
							</tr>
							<tr class='va-bottom h1px'>
								<td>
									<p class='m16 mt0 fleft p2 c-text-64'>скидки, льготы, ДМС<br> и прочие плюшки сотрудникам
									</p>
								</td>
								<td class='va-bottom'>
									<img class='d-block m16 mt0 fright bg-white radius50' width='36' height='36' src=''>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
			<img class='l075 mt32' src='https://wiki.yandex-team.ru/static-files/.files/logo-ru-main.svg' />`,
			},
			{
				subtitle: 'nav links + logo',
				code: `<table cellspacing="0" cellpadding="0">
				<tr>
					<td class='w33'>
						<h4>Заголовок</h4>
					</td>
					<td class='w24px'></td>
					<td class='w33'>
						<h4>Заголовок</h4>
					</td>
					<td class='w24px'></td>
					<td class='w33'>
						<h4>Заголовок</h4>
					</td>
				</tr>
				<tr class='h16'></tr>
				<tr>
					<td class='w33'>
						<ul class='list-none'>
							<li><a class='p2 c-link' href='#' target=''>Ссылка</a></li>
							<li class='mt8'><a class='p2 c-link' href='#' target=''>Ссылка</a></li>
							<li class='mt8'><a class='p2 c-link' href='#' target=''>Ссылка</a></li>
						</ul>
					</td>
					<td class='w24px'></td>
					<td class='w33'>
						<ul class='list-none'>
							<li><a class='p2 c-link' href='#' target=''>Ссылка</a></li>
							<li class='mt8'><a class='p2 c-link' href='#' target=''>Ссылка</a></li>
							<li class='mt8'><a class='p2 c-link' href='#' target=''>Ссылка</a></li>
						</ul>
					</td>
					<td class='w24px'></td>
					<td class='w33'>
						<ul class='list-none'>
							<li><a class='p2 c-link' href='#' target=''>Ссылка</a></li>
							<li class='mt8'><a class='p2 c-link' href='#' target=''>Ссылка</a></li>
							<li class='mt8'><a class='p2 c-link' href='#' target=''>Ссылка</a></li>
						</ul>
					</td>
				</tr>
			</table>
			<img class='l075 mt32' src='https://wiki.yandex-team.ru/static-files/.files/logo-ru-main.svg' />`,
			},
		],
	},
]
