import serverRequesthandler from '../components/serverRequestHandler';
import appsettingHandler from '../appsettings';

const questinfo = () => {
	let appsettings = appsettingHandler();
	let requestHandler = serverRequesthandler();

	function showDoQuest(options, callback) {
		let usehbtmplate = appsettings.handlebartemplate.hb_Doquestinfo_tmp;

		if (options.hbtmpl === 'inputtmpl') {
			usehbtmplate = appsettings.handlebartemplate.hb_doinputquest_tmp;
		}

		if (options.hbtmpl === 'gametmpl') {
			usehbtmplate = appsettings.handlebartemplate.hb_doGamequest_tmp;
		}

		let requestdata = {
			apiurl: appsettings.api.questcommand.showQuest(),
			handlebartemplate: usehbtmplate,
			cssID: '#bb_aj_GenericModalContainer',
			postdata: {
				Userid: options.Userid,
				QuestID: options.QuestID,
				QTriggerID: options.QTriggerID
			}
		};

		render(requestdata, callback);
	}

	function DoTheQuest(options, callback) {
		let requestdata = {
			apiurl: appsettings.api.questcommand.doQuest(),
			postdata: {
				Userid: options.Userid,
				QuestID: options.QuestID,
				QTriggerID: options.QTriggerID,
				uQuestID: options.uQuestID,
				Svar: options.Svar
			}
		};

		requestHandler.chkpost(requestdata, callback);
	}

	function getStatus(options, callback) {
		let requestdata = {
			apiurl: appsettings.api.questcommand.showQuest(),
			postdata: {
				Userid: options.Userid,
				QuestID: options.QuestID,
				QTriggerID: options.QTriggerID
			}
		};

		requestHandler.chkpost(requestdata, data => {
			callback(data);
		});
	}

	function render(getdata, callback) {
		requestHandler.doPost(getdata, data => {
			callback(data);
		});
	}

	return {
		showDoQuest: showDoQuest,
		DoTheQuest: DoTheQuest,
		getStatus: getStatus
	};
};
export default questinfo;
