import modalhandler from '../Helper/Modal_plugin';
import fixSvTextHandler from '../Helper/fixSvTextHelper';
import questinfoHandler from '../components/doquestInfo';

const doQuestEventHandler = userid => {
	// bind functions
	let qinfohandler = questinfoHandler();
	let mod = modalhandler();
	let txtfix = fixSvTextHandler();
	let mainappGame = '';
	if (typeof mainbibblomongameapp === typeof Function) {
		mainappGame = mainbibblomongameapp();
	}
	let hbtemplate = '';
	let ModalcontcssID = '#bb_aj_GenericModalContainer';
	let $bb_aj_GenericModalContainer = $(ModalcontcssID);

	//bind events
	$('body').on('click', '.bb_aj_QuestToDo', showquestmodal);
	$bb_aj_GenericModalContainer.on('click', '#bb_aj_dosubquest', dothesubquest);
	$bb_aj_GenericModalContainer.on(
		'click',
		'#bb_aj_doinputsubquest',
		doInputsubquest
	);
	$('body').on('click', '.bb_aj_QuestToDo', showquestmodal);
	$bb_aj_GenericModalContainer.on('click', '#bb_aj_dosubquest', dothesubquest);
	$bb_aj_GenericModalContainer.on(
		'click',
		'#bb_aj_doinputsubquest',
		doInputsubquest
	);

	$bb_aj_GenericModalContainer.on(
		'click',
		'#bb_aj_doGamequest',
		dotheGameQquest
	);

	// functions
	function showquestmodal() {
		let $QuestOption = $(this);

		let option = {
			Userid: $('#barnensbiblCurrentUserid').html(),
			QuestID: $QuestOption.attr('data-questid'),
			QTriggerID: $QuestOption.attr('data-triggerid'),
			hbtmpl: $QuestOption.attr('data-hbTempl')
		};
		if (option.Userid > 0) {
			qinfohandler.showDoQuest(option, data => {
				mod.open();
			});
		}
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

		let $bb_aj_doQuest = $('.bb_aj_QuestToDo[data-questid=' + qid + ']');
		let $bb_aj_QuestRegister = $(
			'.bb_aj_QuestRegister[data-questid=' + qid + ']'
		);
		let $bb_aj_QuestComplete = $(
			'.bb_aj_QuestComplete[data-questid=' + qid + ']'
		);

		$bb_aj_QuestRegister.hide();
		$bb_aj_QuestComplete.hide();
		$bb_aj_doQuest.hide();

		if (Userid > 0) {
			qinfohandler.getStatus(option, data => {
				switch (data.Statuscode) {
					case -1:
						$bb_aj_QuestRegister.show();
						$bb_aj_QuestRegister.html('N&aring;got blev fel!');
						break;
					case 0:
						$bb_aj_QuestRegister.show();
						break;
					case 1:
						$bb_aj_QuestComplete.show();
						break;
					case 2:
						$bb_aj_doQuest.show();
						break;
					default:
						$bb_aj_QuestRegister.show();
				}
			});
		} else {
			console.log('ej inloggad');
		}

		return false;
	}
	////////////////////
	function dotheGameQquest() {
		let getval = $('#bb_aj_modalbody');

		let option = {
			Userid: getval.attr('data-userid'),
			QuestID: getval.attr('data-questid'),
			QTriggerID: getval.attr('data-triggerid'),
			uQuestID: getval.attr('data-uquestid'),
			Svar: getval.attr('data-svar')
		};

		$('#bb_aj_modalbody').attr('data-svar', 'gamestart');
		let svarar = mainappGame.winorloose();

		if (option.Svar == 'gamestart') {
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
		} else {
			mainappGame.showbokdrakegame(option.Userid);
			$('#bb_aj_doGamequest').html('Game Over!');
			mod.open();
		}

		return false;
	}
	///////////////

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
		let correctsvar = getval.attr('data-svar');
		let svarsMess = $('.bb_aj_Svarat');
		let errMess = $('.bb_aj_ErrMess');
		let svarsbutton = $('#bb_aj_doinputsubquest');

		svarsMess.html('');
		errMess.html('');

		console.log('inne');
		if (getinputval.val() != '') {
			let option = {
				Userid: getval.attr('data-userid'),
				QuestID: getval.attr('data-questid'),
				QTriggerID: getval.attr('data-triggerid'),
				uQuestID: getval.attr('data-uquestid'),
				Svar: getinputval.val()
			};

			if (option.Userid > 0) {
				if (correctsvar.toLowerCase() == getinputval.val().toLowerCase()) {
					svarsMess.html(
						txtfix.fixtext('<h1 style="color:green;">JAAA! Rätt svar!</h1>')
					);
					qinfohandler.DoTheQuest(option, data => {
						if (data.Statuscode != 2) {
							$bb_aj_doQuest.hide();
						}
						setTimeout(() => {
							mod.close();
						}, 3000);
					});
				} else {
					svarsMess.html(
						txtfix.fixtext('<h1 style="color:red;">NEEJ!! du svarade fel!</h1>')
					);

					setTimeout(() => {
						mod.close();
						svarsMess.html('');
						getinputval.val('');
					}, 4000);
				}
				return false;
			}
		} else {
			errMess.html(
				txtfix.fixtext(
					'<h3 style="color:red;">Du måste förstås skriva nått!</h3>'
				)
			);
			return false;
		}
		return false;
	}

	return {
		showsubquest: showsubQuest
	};
};
export default doQuestEventHandler;
