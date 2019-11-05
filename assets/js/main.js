import QuestEventHandler from './components/doquestEvent';

$(function() {
	let init = () => {
		let questhandler = QuestEventHandler();
		///TODO ändra till class istället för id för att man skall kunna loopa igenom alla quest på sidan som visas
		let userid = $('#barnensbiblCurrentUserid').html();
		$('.bb_aj_QuestBlock').each(function() {
			let $bb_aj_doQuest = $(this);
			let QuestID = $bb_aj_doQuest.attr('data-questid');
			let QTriggerID = $bb_aj_doQuest.attr('data-triggerid');
			let hbTmpl = $bb_aj_doQuest.attr('data-hbTempl');
			// hbTmpl = 'inputtmpl';

			//$bb_aj_doQuest.hide();

			questhandler.showsubquest(QuestID, userid, QTriggerID, hbTmpl);
		});
	};
	init();

	/// javascript API f�r andra script att ansluta!
	global.showsubquest = function() {
		function Questshowsubquest(QuestID, userid, QTriggerID, hbTmpl) {
			questhandler.showsubquest(QuestID, userid, QTriggerID, hbTmpl);
		}

		function test(value) {
			if (value) {
				alert('Ropar denna debugtext: ' + value);
			} else {
				alert('ropar utan debugtext!');
			}
		}

		return {
			questshowsubquet: Questshowsubquest,
			test: test
		};
	};
});
