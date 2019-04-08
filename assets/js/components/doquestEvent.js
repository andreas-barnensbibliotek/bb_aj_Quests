import modalhandler from '../Helper/Modal_plugin';
import questinfoHandler from '../components/doquestInfo';

const doQuestEventHandler = userid => {
	// bind functions
	let qinfohandler = questinfoHandler();
	let mod = modalhandler();
	let hbtemplate = '';
	//cacheDom
	let $bb_aj_doQuest = $('#bb_aj_doQuest');
	let ModalcontcssID = '#bb_aj_GenericModalContainer';
	let $bb_aj_GenericModalContainer = $(ModalcontcssID);

	//bind events
	$('body').on('click', '#bb_aj_doQuest', showquestmodal);
	$bb_aj_GenericModalContainer.on('click', '#bb_aj_dosubquest', dothesubquest);
	$bb_aj_GenericModalContainer.on(
		'click',
		'#bb_aj_doinputsubquest',
		doInputsubquest
	);

	// functions
	function showquestmodal() {
		mod.open();
		return false;
	}

	function showsubQuest(qid, Userid, triggerid, hbtmpl) {
		hbtemplate = hbtmpl;
		let option = {
			Userid: Userid,
			QuestID: qid,
			QTriggerID: triggerid,
			hbtmpl: hbtmpl
		};

		if (Userid > 0) {
			qinfohandler.showDoQuest(option, data => {
				if (data.Statuscode === 2) {
					$bb_aj_doQuest.show();
				} else {
					$bb_aj_doQuest.hide();
				}
			});
		} else {
			console.log('ej inloggad');
		}

		return false;
	}

	function dothesubquest() {
		let getval = $('#bb_aj_modalbody');

		let option = {
			Userid: getval.attr('data-userid'),
			QuestID: getval.attr('data-questid'),
			QTriggerID: getval.attr('data-triggerid'),
			uQuestID: getval.attr('data-uquestid'),
			Svar: getval.attr('data-svar')
		};

		if (option.Userid > 0) {
			qinfohandler.DoTheQuest(option, () => {
				setTimeout(() => {
					mod.close();
					showsubQuest(
						option.QuestID,
						option.Userid,
						option.QTriggerID,
						hbtemplate
					);
				}, 3000);
			});
		}

		return false;
	}

	function doInputsubquest() {
		let getval = $('#bb_aj_modalbody');
		let getinputval = $('#bb_aj_subquest');

		if (getinputval.text() != '') {
			let option = {
				Userid: getval.attr('data-userid'),
				QuestID: getval.attr('data-questid'),
				QTriggerID: getval.attr('data-triggerid'),
				uQuestID: getval.attr('data-uquestid'),
				Svar: getinputval.text()
			};

			if (option.Userid > 0) {
				qinfohandler.DoTheQuest(option, () => {
					setTimeout(() => {
						mod.close();
					}, 3000);
				});
			}
		} else {
			let option = {
				cssID: ModalcontcssID,
				handlebartemplate: 'inputtmpl',
				data: {
					Userid: getval.attr('data-userid'),
					QuestID: getval.attr('data-questid'),
					QTriggerID: getval.attr('data-triggerid'),
					uQuestID: getval.attr('data-uquestid'),
					Svar: getval.attr('data-svar')
				}
			};
			//TODO visa alert!
		}
		return false;
	}

	return {
		showsubquest: showsubQuest
	};
};
export default doQuestEventHandler;
