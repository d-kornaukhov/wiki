const components = [
	// Стили
	{
		title: "styles",
		id: "styles",
		code: `	<style>
		* {
			padding: 0;
			margin: 0;
			font-family: 'YS Text', Arial, Helvetica, sans-serif;
			font-size: 18px;
			line-height: 21px;
		}
		table {
			width: 100%;
			border: 0px;
			border-collapse: separate;
		}
		
		/* Heading */
		h1 {
			font-size: 42px;
			line-height: 48px;
			font-weight: 700;
		}
		h2 {
			font-size: 36px;
			line-height: 41px;
			font-weight: 700;
		}
		h3 {
			font-size: 30px;
			line-height: 34px;
			font-weight: 700;
		}
		h4 {
			font-size: 24px;
			line-height: 28px;
			font-weight: 700;
		}
		
		/* Paragraph */
		.p1-bold {
			font-size: 18px;
			line-height: 21px;
			font-weight: 700;
		}
		.p1 {
			font-size: 18px;
			line-height: 21px;
			font-weight: 400;
		}
		.p2-bold {
			font-size: 14px;
			line-height: 16px;
			font-weight: 700;
		}
		.p2 {
			font-size: 14px;
			line-height: 16px;
			font-weight: 400;
		}
		
		/* Line-height */
		.lh16 {
			line-height: 16px !important;
		}
		.lh20 {
			line-height: 20px !important;
		}
		.lh24 {
			line-height: 24px !important;
		}
		.lh32 {
			line-height: 32px !important;
		}
		.lh40 {
			line-height: 40px !important;
		}
		.lh50 {
			line-height: 50px !important;
		}
		
		/* Caption */
		.c-bold {
			font-size: 12px;
			line-height: 14px;
			font-weight: 700;
		}
		.c {
			font-size: 12px;
			line-height: 14px;
			font-weight: 400;
		}
		
		/* Link */
		.underline {
			text-decoration: underline;
		}
		a {
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
		.radius12 {
			border-radius: 12px;
		}
		.radius16 {
			border-radius: 16px;
		}
		.radius32 {
			border-radius: 32px;
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
		
		/* Background */
		.bg-gray {
			background-color: rgba(0, 0, 0, 0.07);
			border: 1px solid rgba(255, 255, 255, 0.16);
			/* background-color: #f3f3f3; */
		}
		.bg-blue {
			background-color: rgba(146, 181, 253, 0.16);
			/* background-color: #E5F5FF; */
		}
		.bg-yellow {
			background-color: #ffdb4d;
		}
		.bg-red {
			background-color: #fc3f1d;
		}
		.bg-white {
			background-color: #ffffff;
		}
		.bg-black {
			background-color: #000000;
		}
		
		/* Margins */
		/* Top */
		.mt140 {
			margin-top: 140px !important;
		}
		.mt72 {
			margin-top: 72px !important;
		}
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
		.mt12 {
			margin-top: 12px !important;
		}
		.mt8 {
			margin-top: 8px !important;
		}
		.mt4 {
			margin-top: 4px !important;
		}
		
		/* Left */
		.ml140 {
			margin-left: 140px !important;
		}
		.ml72 {
			margin-left: 72px !important;
		}
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
		.ml12 {
			margin-left: 12px !important;
		}
		.ml8 {
			margin-left: 8px !important;
		}
		.ml4 {
			margin-left: 4px !important;
		}
		
		/* Right */
		.mr140 {
			margin-right: 140px !important;
		}
		.mr72 {
			margin-right: 72px !important;
		}
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
		.mr12 {
			margin-right: 12px !important;
		}
		.mr8 {
			margin-right: 8px !important;
		}
		.mr4 {
			margin-right: 4px !important;
		}
		
		/* Bottom */
		.mb140 {
			margin-bottom: 140px !important;
		}
		.mb72 {
			margin-bottom: 72px !important;
		}
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
		.mb12 {
			margin-bottom: 12px !important;
		}
		.mb8 {
			margin-bottom: 8px !important;
		}
		.mb4 {
			margin-bottom: 4px !important;
		}
		
		/* Margin all */
		.m140 {
			margin: 140px !important;
		}
		.m72 {
			margin: 72px !important;
		}
		.m64 {
			margin: 64px !important;
		}
		.m48 {
			margin: 48px !important;
		}
		.m40 {
			margin: 40px !important;
		}
		.m32 {
			margin: 32px !important;
		}
		.m24 {
			margin: 24px !important;
		}
		.m16 {
			margin: 16px !important;
		}
		.m12 {
			margin: 12px !important;
		}
		.m8 {
			margin: 8px !important;
		}
		.m4 {
			margin: 4px !important;
		}
		
		/* Paddings */
		/* Padding all */
		.pad0 {
			padding: 0px;
		}
		.pad8 {
			padding: 8px;
		}
		.pad12 {
			padding: 12px;
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
		.pad80 {
			padding: 80px;
		}
		
		/* Padding left */
		.padl0 {
			padding-left: 0px;
		}
		.padl8 {
			padding-left: 8px;
		}
		.padl12 {
			padding-left: 12px;
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
		.padl80 {
			padding-left: 80px;
		}
		
		/* Padding right */
		.padr0 {
			padding-right: 0px;
		}
		.padr8 {
			padding-right: 8px;
		}
		.padr12 {
			padding-right: 12px;
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
		.padr80 {
			padding-right: 80px;
		}
		
		/* Padding top */
		.padt0 {
			padding-top: 0px;
		}
		.padt8 {
			padding-top: 8px;
		}
		.padt12 {
			padding-top: 12px;
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
		.padt80 {
			padding-top: 80px;
		}
		
		/* Padding bottom */
		.padb0 {
			padding-bottom: 0px;
		}
		.padb8 {
			padding-bottom: 8px;
		}
		.padb12 {
			padding-bottom: 12px;
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
		.padb80 {
			padding-bottom: 80px;
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
		.w1 {
			width: 1%;
		}
		/* Addiction you width */
		
		/* Colors */
		.cblack {
			color: #000000;
		}
		.cpb {
			opacity: 0.6;
		}
		
		.cgray {
			color: #999999;
		}
		.cwhite {
			color: #ffffff;
		}
		.cblue {
			color: #3c8add;
		}
		
		.cyellow {
			color: #ffdb4d;
		}
		.cred {
			color: #fc3f1d;
		}
		
		/* Arrow */
		.arrow-l {
			border-left: 1px solid #999999;
			border-bottom: 1px solid #999999;
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
		}
		
		.arrow-l-h1 {
			border-left: 1px solid #999999;
			border-bottom: 1px solid #999999;
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
			margin-top: 13px;
		}
		
		.arrow-l-h2 {
			border-left: 1px solid #999999;
			border-bottom: 1px solid #999999;
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
			margin-top: 9px;
		}
		
		.arrow-l-h3 {
			border-left: 1px solid #999999;
			border-bottom: 1px solid #999999;
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
			margin-top: 6px;
		}
		
		.arrow-l-h4 {
			border-left: 1px solid #999999;
			border-bottom: 1px solid #999999;
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			margin-right: 3px;
			margin-top: 3px;
		}
		
		/* как отступы с загаловками в стилях */
		.arrow-s {
			border-left: 1px solid #999999;
			border-bottom: 1px solid #999999;
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
			margin-top: 12px;
		}
		hr {
			margin: 12px 0;
		}
		.wiki-cut__summary {
			color: inherit;
		}
		.hr {
			height: 1px;
			background-color: #dbe2e7;
		}
		
		/* Buttons */
		.btn50 {
			height: 50px;
			line-height: 50px;
		}
		
		/* Addiction width */
		.container-mobile {
			max-width: 390px;
			margin: 0 auto;
		}
		.container {
			max-width: 1216px;
			margin: 0 auto;
		}
		
		.border-gray {
			border: 1px solid rgba(128, 128, 128, 0.16);
		}
		
		/* Addiction v1.2 */
		.h4 {
			height: 4px;
		}
		.h8 {
			height: 8px;
		}
		.h12 {
			height: 12px;
		}
		.h16 {
			height: 16px;
		}
		.h24 {
			height: 24px;
		}
		.h32 {
			height: 32px;
		}
		.h40 {
			height: 40px;
		}
		.h48 {
			height: 48px;
		}
		.h64 {
			height: 64px;
		}
		.h80 {
			height: 80px;
		}
		.h88 {
			height: 88px;
		}
		.h96 {
			height: 96px;
		}
		.h120 {
			height: 120px;
		}
		.h144 {
			height: 144px;
		}
		.h160 {
			height: 160px;
		}
		
		.min-h40 {
			min-height: 40px;
		}
		.min-h48 {
			min-height: 48px;
		}
		.min-h56 {
			min-height: 56px;
		}
		.min-h64 {
			min-height: 64px;
		}
		.min-h72 {
			min-height: 72px;
		}
		.min-h80 {
			min-height: 80px;
		}
		.min-h88 {
			min-height: 88px;
		}
		.min-h96 {
			min-height: 96px;
		}
		
		.h100p {
			height: 100%;
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
		
		.lh50 {
			line-height: 50px !important;
		}
		
		.bg-center {
			background-position: center;
			background-size: cover;
		}
		/* Color opacity */
		.cpb {
			opacity: 0.6;
		}
		
		/* Logo */
		.logo {
			background-image: url(https://storage.yandexcloud.net/cdn.tsekh.design/yahr-static/Logo-RU-Main.svg);
			background-size: cover;
			display: block;
		}
		
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
		</style>`,
	},

	// Таблицы
	{
		title: "columns",
		subtitle: "Table 2 columns",
		id: "columns",
		code: `<table>
		<tr>
			<td class="w495">content</td>
			<td class="w1"></td>
			<td class="w495">content</td>
		</tr>
	</table>`,
	},
	{
		subtitle: "Table 3 columns",
		id: "columns",
		code: `<table>
		<tr>
				<td class="w33">content</td>
				<td class="w1"></td>
				<td class="w33">content</td>
				<td class="w1"></td>
				<td class="w33">content</td>
		</tr>
</table>`,
	},
	{
		subtitle: "Table 4 columns",
		id: "columns",
		code: `<table>
		<tr>
				<td class="w245">content</td>
				<td class="w1"></td>
				<td class="w245">content</td>
				<td class="w1"></td>
				<td class="w245">content</td>
				<td class="w1"></td>
				<td class="w245">content</td>
		</tr>
</table>`,
	},
	{
		subtitle: "Table 5 columns",
		id: "columns",
		code: `<table>
		<tr>
				<td class="w19">content</td>
				<td class="w1"></td>
				<td class="w19">content</td>
				<td class="w1"></td>
				<td class="w19">content</td>
				<td class="w1"></td>
				<td class="w19">content</td>
				<td class="w1"></td>
				<td class="w19">content</td>
		</tr>
</table>`,
	},
	{
		subtitle: "Table 6 columns",
		id: "columns",
		code: `<table>
		<tr>
				<td class="w15">content</td>
				<td class="w1"></td>
				<td class="w15">content</td>
				<td class="w1"></td>
				<td class="w15">content</td>
				<td class="w1"></td>
				<td class="w15">content</td>
				<td class="w1"></td>
				<td class="w15">content</td>
				<td class="w1"></td>
				<td class="w15">content</td>
		</tr>
</table>`,
	},

	// каты
	{
		title: "cut",
		subtitle: "Cut H1",
		id: "cut",
		code: `
    <details class="w100 mt16">
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
    <div class="hr mt16"></div>`,
	},
	{
		subtitle: "Cut H2",
		id: "cut",
		code: `
    <details class="w100 mt16">
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
    <div class="hr mt16"></div>`,
	},
	{
		subtitle: "Cut H3",
		id: "cut",
		code: `
    <details class="w100 mt16">
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
    <div class="hr mt16"></div>`,
	},
	{
		subtitle: "Cut H4",
		id: "cut",
		code: `
		<details class="w100 mt16">
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
<div class="hr mt16"></div>`,
	},
	{
		subtitle: "Cut Paragraph",
		id: "cut",
		code: `    <details class="w100 mt16">
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
<div class="hr mt16"></div>`,
	},

	// Контакты
	{
		title: "contacts",
		id: "contacts",
		code: `<table>
    <tr>
        <td class="w33 pad12 radius12 bg-gray">
            <a href="mailto:helpy@yandex-team.ru" class="inherit underline-none dblock" target="_blank">
                <table class="h96">
                    <tr>
                        <td class="va-top">
                            <p class="p1-bold">С любыми вопросами <br>обращайтесь в Helpy</p>
                        </td>
                        <td rowspan="3" class="va-bottom">
                            <img class="h40 fright" src="https://wiki.yandex-team.ru/users/yulia-tsekh/international-recruitment-and-hiring/global-mobility-v-jandeks/.files/helpy.png" alt="">
                            <div class="clear"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="h16"></td>
                    </tr>
                    <tr>
                        <td>
                            <p class="p2 underline cgray">helpy@yandex-team.ru</p>
                        </td>
                    </tr>
                </table>
            </a>
        </td>
        <td class="w1"></td>
        <td class="w33 pad12 radius12 bg-gray">
            <a href="https://t.me/YandexHelpDeskbot" class="inherit underline-none dblock" target="_blank">
                <table class="h96">
                    <tr>
                        <td class="va-top">
                            <p class="p1-bold">Телеграм-бот Helpy</p>
                        </td>
                        <td rowspan="3" class="va-bottom">
                            <img class="h40 fright" src="https://wiki.yandex-team.ru/users/yulia-tsekh/international-recruitment-and-hiring/global-mobility-v-jandeks/.files/tg.png" alt="">
                            <div class="clear"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="h40"></td>
                    </tr>
                    <tr>
                        <td>
                            <p class="p2 underline cgray">@YandexHelpDeskbot</p>
                        </td>
                    </tr>
                </table>
            </a>
        </td>
        <td class="w1"></td>
        <td class="w33 pad12 radius12 bg-gray">
            <div class="inherit underline-none dblock" target="_blank">
                <table class="h96">
                    <tr>
                        <td class="va-top">
                            <p class="p1-bold">Звонок в Helpy</p>
                        </td>
                        <td rowspan="3" class="va-bottom">
                            <img class="h40 fright" src="https://wiki.yandex-team.ru/users/yulia-tsekh/international-recruitment-and-hiring/global-mobility-v-jandeks/.files/message.png" alt="">
                            <div class="clear"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="h40"></td>
                    </tr>
                    <tr>
                        <td>
                            <p class="p2 cgray">8 (800) 250–96–39 (доб. 444)</p>
                        </td>
                    </tr>
                </table>
            </div>
        </td>
    </tr>
</table>`,
	},
]
