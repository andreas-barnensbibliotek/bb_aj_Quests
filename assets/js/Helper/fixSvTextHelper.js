const FixSvText = () => {
	function fixsvtxt(mes) {
		try {
			return decodeURIComponent(escape(mes));
		} catch (e) {
			String.prototype.replaceAll = function(str1, str2, ignore) {
				return this.replace(
					new RegExp(
						str1.replace(
							/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,
							'\\$&'
						),
						ignore ? 'gi' : 'g'
					),
					typeof str2 == 'string' ? str2.replace(/\$/g, '$$$$') : str2
				);
			};

			mes = mes.replaceAll('Ä', String.fromCharCode(196)); //Ä
			mes = mes.replaceAll('Å', String.fromCharCode(197)); //Å
			mes = mes.replaceAll('Ö', String.fromCharCode(214)); //Ö
			mes = mes.replaceAll('ä', String.fromCharCode(228)); //ä
			mes = mes.replaceAll('å', String.fromCharCode(229)); //å
			mes = mes.replaceAll('ö', String.fromCharCode(246)); //ö

			return mes;
		}
	}
	return {
		fixtext: fixsvtxt
	};
};
export default FixSvText;
