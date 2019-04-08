const appsettings = () => {
	// Localhost
	//let _apiserver = 'http://localhost:59015';
	//let _dnnURL = 'http://localdev.kivdev.se';
	// DEV1
	let _apiserver = 'http://dev1.barnensbibliotek.se:8080';
	let _dnnURL = 'http://dev1.barnensbibliotek.se';

	//DEV NYTT SERVER
	//let _apiserver = 'http://dev1.barnensbibliotek.se:8080';
	//let _dnnURL = 'http://nytt.barnensbibliotek.se';

	//Live SERVER
	//let _apiserver = "https://www2.barnensbibliotek.se";
	//let _dnnURL = "https://www.barnensbibliotek.se";

	let _devkey = 'alf';
	let _apidevkeyend = '/devkey/' + _devkey + '/?type=json';
	let _localOrServerURL = '';
	let _htmltemplateURL = '/desktopModules/bb_aj_Quests/htmltemplates/';

	//// HANDLEBAR TEMPLATE
	let _hb_Doquestinfo_template =
		_dnnURL + _htmltemplateURL + 'doquestTemplate.txt';
	let _hb_DoInputquestinfo_template =
		_dnnURL + _htmltemplateURL + 'doInputQuestTemplate.txt';

	let _fn_visasubquest = function() {
		return _apiserver + '/Api_v3.1/quest/typ/shhidQ' + _apidevkeyend;
	};
	let _fn_dosubquest = function() {
		return _apiserver + '/Api_v3.1/quest/typ/utSQ' + _apidevkeyend;
	};

	return {
		apiserver: _apiserver,
		dnnURL: _dnnURL,
		localOrServerURL: _localOrServerURL,
		htmltemplateurl: _dnnURL + _htmltemplateURL,
		devkey: _devkey,
		handlebartemplate: {
			hb_Doquestinfo_tmp: _hb_Doquestinfo_template,
			hb_doinputquest_tmp: _hb_DoInputquestinfo_template
		},
		api: {
			questcommand: {
				showQuest: _fn_visasubquest,
				doQuest: _fn_dosubquest
			},
			devkeyend: _apidevkeyend
		},
		debug: 'false'
	};
};

export default appsettings;
