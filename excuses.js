/* Combinatorial excuses. Same slot across languages is the same premise, written for that language. */
var EXCUSES = (function (root) {
  "use strict";

  function lines(rows) {
    return {
      en: rows.map(function (row) { return row[0]; }),
      ja: rows.map(function (row) { return row[1]; }),
      zh: rows.map(function (row) { return row[2]; }),
    };
  }

  function family(id, situations, bridges, punchlines) {
    return {
      id: id,
      situations: lines(situations),
      bridges: lines(bridges),
      punchlines: {
        any: lines(punchlines.any),
        boss: lines(punchlines.boss),
        team: lines(punchlines.team),
        client: lines(punchlines.client),
      },
    };
  }

  var calendar = {
    plausible: family(
      "calendar",
      [
        [
          "A hold I put on my own calendar is sitting on this hour, and it will not move",
          "自分で押さえた予定が、この時間に居座っています",
          "我自己锁上的那段忙，正好压着这一小时，挪不走",
        ],
        [
          "The block before the {meeting} changed its name instead of ending",
          "{meeting}の前の予定は、終わらずに件名だけ変わりました",
          "{meeting}前面那场没有散，只是换了个标题",
        ],
        [
          "Two invites want this hour, and I already answered the earlier one",
          "招待が二つこの時間を取り合い、先のほうには返事済みです",
          "两份邀请都要这个小时，我已经回了先到的那份",
        ],
        [
          "This slot already has an earlier claim, and I am keeping the claim",
          "この枠には先約があり、先約のほうを守ります",
          "这个点已经有一个更早的约定，我留在那个约定里",
        ],
      ],
      [
        [
          "On paper the overlap is short. In practice it is the whole hour",
          "紙の上の重なりは短いです。実際は一時間ぶんです",
          "纸面上只重叠了一小会儿，实际是整整一小时",
        ],
        [
          "I looked at the calendar again. It did not revise itself",
          "カレンダーをもう一度見ました。訂正はありませんでした",
          "我又看了一眼日历。它没有改口",
        ],
        [
          "Moving one meeting would only annoy the other",
          "片方を動かすと、もう片方が気を悪くします",
          "挪开这场，另一场就会不高兴",
        ],
      ],
      {
        any: [
          [
            "I will read the notes as if the chair had been occupied",
            "議事は、座っていたものとして読みます",
            "纪要我会当成自己在场来读",
          ],
          [
            "Please treat this as a no, with the calendar as the attachment",
            "カレンダーを添えた辞退として扱ってください",
            "就把这当成一封附件是日历的辞谢",
          ],
          [
            "I can follow the decision. I cannot attend both hours",
            "決定にはつけます。二つの時間には出られません",
            "决定我跟得上。两个小时我没法同时到场",
          ],
        ],
        boss: [
          [
            "The earlier hold has tenure. I am not going to argue with it",
            "先約のほうに在籍年数があります。論争はしません",
            "先占住的那场有年资。我不跟它争",
          ],
          [
            "You will have my part without the overlap talking over it",
            "重なっているほうに遮られず、私の分は届きます",
            "我的部分会送到，不会被重叠的那场抢话",
          ],
          [
            "Please decide on schedule. My voice is rented to the other block",
            "予定どおり決めてください。声はもう一方に貸し出しています",
            "请按点做决定。我的声音租给另一场了",
          ],
        ],
        team: [
          [
            "I'll add my line where it cannot spend the first five minutes",
            "最初の五分を使わない場所に、自分の一行を足します",
            "我会把那一行写在花不掉前五分钟的地方",
          ],
          [
            "Go ahead. My absence is the conflict, not a review of the agenda",
            "進めてください。欠席は予定の衝突で、議題への評価ではありません",
            "你们开。我缺席是因为撞期，不是在给议程打分",
          ],
          [
            "I'll pick up the thread once I am only in one meeting",
            "会議が一つになったら、スレッドを拾います",
            "等我只剩一场会，我就去接那条消息",
          ],
        ],
        client: [
          [
            "The other hold was here first, and it does not know your name",
            "先約はこちらの名前を知りません。先にいたのは向こうです",
            "先占住的那场并不知道您是谁，而且它先到",
          ],
          [
            "Please keep the hour. I will not split it into two bad ones",
            "この時間はお受け取りください。悪い一時間を二つにはしません",
            "这个小时请您留着。我不会把它拆成两个糟糕的小时",
          ],
          [
            "I would rather return the slot than attend it halfway",
            "中途半端に出るより、枠はお返しします",
            "与其出席一半，不如把时段还给您",
          ],
        ],
      }
    ),
    suspicious: family(
      "calendar",
      [
        [
          "My calendar double-booked me with myself",
          "カレンダーが、私を私と二重予約しました",
          "日历把我和我自己订在了同一个时间",
        ],
        [
          "I am already in a meeting about whether the {meeting} should happen",
          "{meeting}をやるかどうかの会議に、すでに入っています",
          "我已经在开一场会，议题是这场{meeting}要不要开",
        ],
        [
          "The invite has two times, and I stayed loyal to the one I saw first",
          "招待の時刻が二つあり、先に見たほうに残っています",
          "邀请上有两个时间，我留在先看见的那个",
        ],
        [
          "A copy of this hour is already in progress, and I am in that copy",
          "この時間の複製がすでに進行していて、私はそちらにいます",
          "这个小时有一份副本正在进行，我在那一份里",
        ],
      ],
      [
        [
          "Both versions of me have a hard stop",
          "どちらの私にも、次の予定が詰まっています",
          "两个我都有紧接着的下一场",
        ],
        [
          "I would explain, but the explanation is double-booked too",
          "説明したいのですが、説明の枠も二重です",
          "我想解释，可解释的时间也被订重了",
        ],
        [
          "The calendar decided this without scheduling a meeting, which I respect",
          "カレンダーは会議を開かずにこれを決めました。そこは尊敬します",
          "日历没开会就做了决定。这一点我尊重",
        ],
      ],
      {
        any: [
          [
            "I'm in the other one",
            "もう一方にいます",
            "我在另一场里",
          ],
          [
            "Please proceed with the version of me that is not speaking",
            "今しゃべっていないほうの私で、進めてください",
            "请和现在没在说话的那个我继续",
          ],
          [
            "Send the outcome. An outcome is the only thing I can attend twice",
            "結果を送ってください。二度出席できるのは、結果だけです",
            "把结果发我。我唯一能出席两次的，是结果",
          ],
        ],
        boss: [
          [
            "I will report what the other meeting decides, if it decides",
            "もう一方が決めたら報告します。決めたらの話です",
            "另一场如果真有结论，我会汇报。前提是它有",
          ],
          [
            "You will get comments in a form that does not talk over you",
            "コメントは、誰の話も遮らない形で出します",
            "意见我会写成不打断任何人的形式",
          ],
          [
            "I can attend the summary. The summary is single-booked",
            "要約なら出られます。要約は一重です",
            "总结我能参加。总结没有被订重",
          ],
        ],
        team: [
          [
            "If I join, that is the other one, and it is not brief",
            "入ってきたら、それはもう一人のほうで、短くありません",
            "若我出现，那是另一个我，而且不会短",
          ],
          [
            "I'll annotate the notes with the opinion I would have had",
            "議事に、出すはずだった意見を書き足します",
            "我会在纪要上补上我本来会有的意见",
          ],
          [
            "Go ahead. The laptop is already closed, which is a kind of RSVP",
            "進めてください。ノートはすでに閉じています。あれも出欠です",
            "你们开吧。电脑已经合上了，那也算一种回复",
          ],
        ],
        client: [
          [
            "Joining would add a second login to a meeting that already has me",
            "出ると、すでに私がいる会議にログインがもう一つ増えます",
            "我要是进场，一场已经有我的会会再多一个登录",
          ],
          [
            "The copy of me that answers mail is free later. This one is not",
            "メールを返すほうの私は、あとで空きます。今の私は空きません",
            "回邮件的那个我稍后有空。现在这个没有",
          ],
          [
            "You should have someone who is only in your meeting",
            "そちらの会議にだけいる人間が、必要だと思います",
            "您需要的是一个只在您这场会里的人",
          ],
        ],
      }
    ),
    absurd: family(
      "calendar",
      [
        [
          "My calendar double-booked me with myself, and the other me already accepted",
          "カレンダーが私を私と二重予約し、もう一人がすでに承諾しました",
          "日历把我和我自己订重了，另一个我已经点了接受",
        ],
        [
          "The {meeting} accepted itself. I was not consulted",
          "{meeting}が自分で出席を承諾しました。私には相談がありません",
          "这场{meeting}自己接受了自己。没有人问过我",
        ],
        [
          "A previous version of me is on the invite, and their notes are already excellent",
          "前の版の私が招待に入っていて、その議事はすでに優秀です",
          "邀请里坐着上一版的我，纪要已经写得很好",
        ],
        [
          "This hour belongs to a recurring event called \"Do Not\", which has never missed",
          "この時間は「入るな」という定例が持っていて、欠かしたことがありません",
          "这个小时属于一个叫「别来」的例会，它从未缺席",
        ],
      ],
      [
        [
          "I tried to decline, and the decline is waiting on the decline",
          "辞退しようとしたら、辞退が辞退の承認待ちになりました",
          "我试着拒绝，拒绝本身还在等拒绝的批准",
        ],
        [
          "A third copy of me would need a chair we do not have",
          "三人目の私には、ない椅子が必要です",
          "第三个我需要一把我们没有的椅子",
        ],
        [
          "I am reachable by carrier pigeon, and the pigeon is in another meeting",
          "連絡手段は伝書鳩です。鳩は別件で会議中です",
          "可以联系我，途径是信鸽。鸽子在开别的会",
        ],
      ],
      {
        any: [
          [
            "I'm in the other one",
            "もう一方にいます",
            "我在另一场里",
          ],
          [
            "Please remove the version of me that can still feel time",
            "まだ時間を感じるほうの私を、外してください",
            "请把那个还能感觉到时间的我去掉",
          ],
          [
            "My placeholder will attend. It has opinions and no microphone",
            "私の代わりの空白が出席します。意見はあり、マイクはありません",
            "我的占位会出席。它有意见，没有麦克风",
          ],
        ],
        boss: [
          [
            "I will file a report from the copy that went. It is more prepared",
            "出席したほうの私から報告します。あちらのほうが準備しています",
            "我会交一份出席了的那个我的报告。那个我准备得更充分",
          ],
          [
            "Consider me present in the attachments",
            "添付の中には、私がいます",
            "请把我算作在附件里出席",
          ],
          [
            "I approve in advance. It is the only tense I have left",
            "事前に承認します。残っている時制はそれだけです",
            "我提前批准。这是我剩下的唯一时态",
          ],
        ],
        team: [
          [
            "If I appear, it is the other one, and it does not get a vote",
            "現れたら別の私です。投票権はありません",
            "若我出现，那是另一个我，没有投票权",
          ],
          [
            "Count the silence as a yes from the next desk over in time",
            "この沈黙は、時間の隣席からの賛成として数えてください",
            "把这段沉默算成时间上邻座的一个赞成",
          ],
          [
            "I will haunt the document, not the call",
            "取りつくのは会議ではなく、文書のほうです",
            "我闹的是文档，不是这通电话",
          ],
        ],
        client: [
          [
            "A more presentable copy of me will write later. This one is fully booked",
            "もう少し整ったほうの私が、あとで書きます。こちらは満席です",
            "比较能见人的那个我稍后会写。这一个已经满员",
          ],
          [
            "Please read this as a decline sent from the present tense",
            "現在形から送られた辞退として、読んでください",
            "请把这封读成现在时发出的辞谢",
          ],
          [
            "You will get the work. The work is not double-booked",
            "成果はお渡しします。成果は二重予約されていません",
            "东西会交给您。东西没有被订重",
          ],
        ],
      }
    ),
  };

  var overlap = {
    plausible: family(
      "overlap",
      [
        [
          "The call before the {meeting} is still going, in the way calls do",
          "{meeting}の前の通話が、通話らしく、まだ終わっていません",
          "{meeting}之前那通还没完，而且完得不太像会完",
        ],
        [
          "I am still in the previous conversation. It has not been told that it ended",
          "前の会話にまだいます。終わったと、その会話は聞いていません",
          "我还在上一场对话里。那场对话没收到结束的通知",
        ],
        [
          "A thread marked urgent opened a few minutes ago and believes itself",
          "数分前に「急ぎ」のスレッドが開き、自分を信じています",
          "几分钟前开了一条标着紧急的消息，而且它相信自己",
        ],
        [
          "Something I said I would finish before this slot is still on the screen",
          "この枠の前に終えると言ったものが、まだ画面に残っています",
          "我说好在这个时段之前做完的东西，还在屏幕上",
        ],
      ],
      [
        [
          "Leaving now would make two conversations worse",
          "今抜けると、会話が二つとも悪くなります",
          "现在走，两场都会更糟",
        ],
        [
          "I offered it five more minutes. It accepted",
          "あと五分だけ差し出しました。受け取られました",
          "我又给了五分钟。对方收下了",
        ],
        [
          "I will be free when it ends, which is not a time on a clock",
          "終われば空きます。時計の時刻ではありません",
          "等它结束我就有空。这不是钟面上的一个点",
        ],
      ],
      {
        any: [
          [
            "I will collect the version that has an ending",
            "終わりのある版を、あとで受け取ります",
            "我之后来收那个有结尾的版本",
          ],
          [
            "Arrival from here would be a rumor with a login",
            "ここから入ると、ログイン付きの噂になります",
            "我现在进去，只会是一个带登录状态的传闻",
          ],
          [
            "My part can wait in writing, where it cannot run long",
            "私の分は文章で待てます。文章は延長しません",
            "我的部分可以等在文字里。文字不会超时",
          ],
        ],
        boss: [
          [
            "You will get the point once I am in only one conversation",
            "会話が一つになったら、要点をお渡しします",
            "等我只剩一场对话，就把要点给你",
          ],
          [
            "The update will not bring the previous meeting with it",
            "更新には、前の会議を添付しません",
            "更新不会把上一场会一起带来",
          ],
          [
            "Please go ahead. I will not make this overlap your problem twice",
            "進めてください。この重なりを、二度ご負担にはしません",
            "请先开。这次重叠我不会让您承担两次",
          ],
        ],
        team: [
          [
            "I'll wave from the other call if the mute holds",
            "ミュートが保てば、向こうの通話から手を振ります",
            "如果静音还在，我就从另一通里挥一下手",
          ],
          [
            "My update is three lines, and the thread has room",
            "更新は三行です。スレッドには余白があります",
            "我的更新就三行，消息里还放得下",
          ],
          [
            "I'll add what I would have said once it no longer has to be live",
            "その場で言う必要がなくなってから、言うはずだったことを足します",
            "等这件事不必当场说了，我再补上本来要说的",
          ],
        ],
        client: [
          [
            "I will write when the other call admits that it is over",
            "もう一方の通話が終了を認めたら、書きます",
            "另一通承认自己结束之后，我就写",
          ],
          [
            "Please keep the slot. I will come back with the point, not the delay",
            "枠はそのままで大丈夫です。遅延ではなく要点を持って戻ります",
            "时段您先留着。我带回的会是要点，不是这段延误",
          ],
          [
            "A clear note is better than a caller who is half somewhere else",
            "どこか別の場所に半分いる出席より、明確なメモのほうがよいはずです",
            "人在别处、心也在别处的出席，不如一封清楚的说明",
          ],
        ],
      }
    ),
    suspicious: family(
      "overlap",
      [
        [
          "The previous meeting ended on the calendar and nowhere else",
          "前の会議は、カレンダーの上でだけ終了しました",
          "上一场会只在日历上结束了",
        ],
        [
          "I am in a meeting that was supposed to decide if we need the {meeting}",
          "{meeting}が必要かの会議に入ったままです",
          "我还在那场用来决定要不要开{meeting}的会里",
        ],
        [
          "A five-minute overlap has been five minutes for a while now",
          "五分の重なりが、しばらく五分のままです",
          "那个五分钟的重叠，已经五分钟了有一会儿",
        ],
        [
          "I stepped into a hallway question, and it formed a quorum",
          "廊下で一つ質問を受けたら、定足数になりました",
          "走廊里有人问了我一句，然后凑够了开会的人数",
        ],
      ],
      [
        [
          "Both rooms believe I am in the other one",
          "どちらの部屋も、私は向こうにいると信じています",
          "两边的房间都相信我在另一边",
        ],
        [
          "I have been about to join since the invite was still on time",
          "招待がまだ時間どおりだった頃から、入るところです",
          "从邀请还算准时的时候起，我就一直是即将加入",
        ],
        [
          "Leaving would require an ending, and endings are in another meeting",
          "抜けるには終了が必要で、終了は別の会議の議題です",
          "要离开得先有个结尾，而结尾在另一场会的议程上",
        ],
      ],
      {
        any: [
          [
            "Please start. I am already late to the meeting I am in",
            "始めてください。今いる会議にも、すでに遅れています",
            "你们先开。我连现在这场会也已经迟到了",
          ],
          [
            "I will arrive as the notes, which have better attendance",
            "議事として到着します。議事のほうが出席率は高いです",
            "我会以纪要的形式到达。纪要的出勤率更高",
          ],
          [
            "Count me present in the overlap and absent in the useful part",
            "重なっている部分には在席、役に立つ部分には不在、でお願いします",
            "重叠的那一段算我在，有用的那一段算我缺席",
          ],
        ],
        boss: [
          [
            "You will hear from me when I can hear only you",
            "あなただけが聞こえる状態になったら、連絡します",
            "等我只能听见您的时候，我会联系",
          ],
          [
            "I will not import the previous meeting into your agenda",
            "前の会議を、そちらの議題には輸入しません",
            "我不会把上一场会进口到您的议程里",
          ],
          [
            "Please take the decision. I am still in the preamble elsewhere",
            "決定はお進めください。私は別の場所で、まだ前置きにいます",
            "决定请您先做。我在别处，还停在开场白",
          ],
        ],
        team: [
          [
            "I'll drop the three lines in the thread when the other call blinks",
            "向こうの通話が瞬きしたら、三行をスレッドに置きます",
            "另一通如果眨眼，我就把三行丢进消息里",
          ],
          [
            "Go ahead. I am the person the other meeting also cannot find",
            "進めてください。もう一方の会議も、私を見つけられていません",
            "你们开。另一场会同样找不到我",
          ],
          [
            "Save me a sentence. I will disagree with it in writing if needed",
            "一文だけ残してください。必要なら文章で反対します",
            "给我留一句话。有需要的话我书面反对",
          ],
        ],
        client: [
          [
            "I am midway through a call that has forgotten its own title",
            "件名を忘れた通話の途中にいます",
            "我在一通已经忘了自己标题的电话中间",
          ],
          [
            "You should not have to share the hour with that call",
            "あの通話と一時間を分け合う必要は、ありません",
            "您不必和那通电话分享这一个小时",
          ],
          [
            "I will send the answer without bringing the other room",
            "もう一つの部屋は連れてこず、答えだけ送ります",
            "答案我会送来，另一间房间不一起带来",
          ],
        ],
      }
    ),
    absurd: family(
      "overlap",
      [
        [
          "The meeting before this one is still introducing the meeting before that",
          "前の会議が、その前の会議の自己紹介をまだしています",
          "上一场会还在介绍它的上一场会",
        ],
        [
          "I am in a sync about the {meeting}, which is itself a sync about a sync",
          "{meeting}のためのシンクにいます。そのシンクも、シンクのシンクです",
          "我在一场为了{meeting}而开的同步里，那场同步本身也是同步的同步",
        ],
        [
          "A quick question from this morning has appointed a chair and a note-taker",
          "今朝のちょっとした質問が、議長と書記を任命しました",
          "今天早上的一个小问题，已经任命了主持人和记录人",
        ],
        [
          "I would leave the previous meeting, but it has not acknowledged my presence, so I cannot exit",
          "前の会議を出たいのですが、在席を認められていないので退出できません",
          "我想离开上一场，可它还没承认我在场，所以我无法退场",
        ],
      ],
      [
        [
          "Time is attending. I am the optional one",
          "時間のほうが出席しています。任意なのは私です",
          "时间在出席。可选的是我",
        ],
        [
          "The overlap has an overlap. I am in the inner one",
          "重なりに重なりがあり、私は内側にいます",
          "重叠上面还有一层重叠。我在里面那层",
        ],
        [
          "I sent my regrets to the previous meeting. It replied with an agenda",
          "前の会議に欠席を出したら、議題が返ってきました",
          "我向上一场发了歉意，它回了我一份议程",
        ],
      ],
      {
        any: [
          [
            "Please start. I am nested too deeply to reach the door",
            "始めてください。ドアまで、入れ子が深すぎます",
            "你们先开。我嵌套得太深，够不着门",
          ],
          [
            "I will attend the recap of the recap, which is my natural habitat",
            "振り返りの振り返りには出ます。そこが生息地です",
            "回顾的回顾我会参加。那是我的栖息地",
          ],
          [
            "Forward the ending. I collect those",
            "終わりを転送してください。収集しています",
            "请把结尾转发我。我在收集这个",
          ],
        ],
        boss: [
          [
            "You may assume I said something reasonable in the meeting I cannot leave",
            "出られない会議では、妥当なことを言ったと見なしてください",
            "请默认我在那场出不来的会里说了句得体的话",
          ],
          [
            "I will surface when the stack of meetings unwinds",
            "会議のスタックが解けたら、浮上します",
            "等这叠会一层层退完，我就浮上来",
          ],
          [
            "Please take this as a status: blocked, by a meeting",
            "状況は「ブロック、原因は会議」として受け取ってください",
            "请把状态看成：被阻塞，阻塞源是一场会",
          ],
        ],
        team: [
          [
            "I'll post from inside the other meeting, like a dispatch",
            "もう一方の会議の内側から、通信のように書きます",
            "我会从另一场会内部发消息，像一则外勤通报",
          ],
          [
            "Go ahead. If you hear me, that is echo from the previous agenda",
            "進めてください。声がしたら、前の議題の残響です",
            "你们开。如果听见我，那是上一份议程的回声",
          ],
          [
            "Leave the notes where the nested version of me can find them",
            "入れ子になった私が見つけられる場所に、議事を置いてください",
            "把纪要放在嵌套版的我找得到的地方",
          ],
        ],
        client: [
          [
            "I am several meetings deep, and yours deserves the one at the surface",
            "会議が何層か重なっていて、そちらには表層の私が要るはずです",
            "我会叠了好几层。您这场应该得到浮在表面的那个我",
          ],
          [
            "A written answer will not be trapped in the preamble",
            "文章の答えは、前置きの中に閉じ込められません",
            "书面的答复不会被困在开场白里",
          ],
          [
            "Please keep your agenda free of the meeting I am stuck inside",
            "私が挟まっている会議を、そちらの議題には入れないでください",
            "请别把我卡住的那场会写进您的议程",
          ],
        ],
      }
    ),
  };

  var logistics = {
    plausible: family(
      "logistics",
      [
        [
          "I am in the other building, and the link between them is theoretical",
          "別の建物にいます。二つのあいだは、理論上つながっています",
          "我在另一栋楼。两栋之间的连接目前还是理论",
        ],
        [
          "My badge opens every door except the one the {meeting} is behind",
          "バッジが開かないのは、{meeting}の向こうの扉だけです",
          "门禁卡哪扇都打得开，除了这场{meeting}后面那一扇",
        ],
        [
          "The trip in is using the time the {meeting} thought it owned",
          "向かう道が、{meeting}が自分のものだと思っていた時間を使っています",
          "去的路上，正在用掉这场{meeting}以为属于自己的时间",
        ],
        [
          "I stepped away for a minute, and the minute has become a corridor",
          "一分だけ席を外したら、その一分が廊下になりました",
          "我离开工位一分钟，那一分钟长成了一条走廊",
        ],
      ],
      [
        [
          "I am closer to a hallway than to a chair",
          "椅子より廊下に近い場所にいます",
          "我离走廊比离椅子近",
        ],
        [
          "The building and I are in a polite disagreement",
          "建物と私は、礼儀正しく意見が分かれています",
          "大楼和我正在礼貌地意见不合",
        ],
        [
          "I will not arrive in a way that helps the hour",
          "この一時間の役に立つ入り方は、できそうにありません",
          "我到达的方式，大概帮不上这一个小时",
        ],
      ],
      {
        any: [
          [
            "I am on the premises in a legal sense only",
            "敷地内なのは、手続き上の話です",
            "我算人在园区，只是门禁系统这么认为",
          ],
          [
            "I will catch up when I am in the same building as the meeting",
            "会議と同じ建物に入ったら、追いつきます",
            "等我和这场会在同一栋楼，我再补上",
          ],
          [
            "Count me out of the room and in on the notes",
            "部屋の外、議事の内、で数えてください",
            "房间里不要算我，纪要里可以算",
          ],
        ],
        boss: [
          [
            "I will write from the place I actually am",
            "実際にいる場所から書きます",
            "我会从我真正所在的地方写",
          ],
          [
            "You should not have to wait on a person who is negotiating with a door",
            "ドアと交渉している人間を、待たせるべきではありません",
            "您不必等一个还在跟门谈判的人",
          ],
          [
            "Please go ahead. My coordinates are not a contribution",
            "進めてください。私の座標は貢献になりません",
            "请先开。我的坐标成不了贡献",
          ],
        ],
        team: [
          [
            "If I arrive, it will be during the last sentence",
            "着くなら、最後の文の途中です",
            "我若赶到，大概在最后一句话的中间",
          ],
          [
            "I'll take the hallway version. It is the short one",
            "廊下版を受け取ります。短いほうです",
            "我收走廊版。那一版比较短",
          ],
          [
            "I'll read the notes from a chair that is not in that room",
            "その部屋にない椅子から、議事を読みます",
            "我会坐在不在那个房间里的椅子上读纪要",
          ],
        ],
        client: [
          [
            "I would rather write than arrive in the form of a delay",
            "遅れという形で到着するより、書きます",
            "与其以延误的形式到达，不如写下来",
          ],
          [
            "Please keep your hour. Mine is in transit",
            "そちらの一時間はそのままで。私の分は移動中です",
            "您的这一小时请照常用。我这份正在路上",
          ],
          [
            "You will have the substance today, without the corridor",
            "廊下なしで、中身は今日お渡しします",
            "今天您会拿到正事，不附带那条走廊",
          ],
        ],
      }
    ),
    suspicious: family(
      "logistics",
      [
        [
          "The room number changed while I was walking to the previous one",
          "前の部屋へ歩いているあいだに、部屋番号が変わりました",
          "我走向原来那间的时候，房间号变了",
        ],
        [
          "I am badged into the building and not into the {meeting}",
          "建物には入れています。{meeting}には入れていません",
          "我刷进了大楼，没有刷进这场{meeting}",
        ],
        [
          "Transit offered me a delay and called it a seat",
          "移動手段が、座席の代わりに遅延をくれました",
          "交通工具给了我一段延误，并称之为座位",
        ],
        [
          "I can see the meeting room. The meeting room cannot see a reason to open",
          "会議室は見えています。会議室のほうは、開く理由を見ていません",
          "我看得见会议室。会议室看不见开门的理由",
        ],
      ],
      [
        [
          "I have walked the same hallway twice, which is a kind of attendance",
          "同じ廊下を二度歩きました。あれも出席の一種です",
          "同一条走廊我走了两遍。这也算一种出席",
        ],
        [
          "The map and the building have different opinions",
          "地図と建物で、意見が違います",
          "地图和大楼意见不一致",
        ],
        [
          "I am early for a room that does not exist yet",
          "まだない部屋に、早く着いてしまいました",
          "我提前到了一间还不存在的房间",
        ],
      ],
      {
        any: [
          [
            "Please start. I am a visitor in my own office",
            "始めてください。自席の来客になっています",
            "你们先开。我目前是自己办公室的访客",
          ],
          [
            "I will join from the correct floor when the building picks one",
            "建物が階を一つに決めたら、正しいほうから入ります",
            "等大楼选定一个楼层，我就从正确的那层加入",
          ],
          [
            "Treat my location as approximate, and my absence as exact",
            "所在は概算、欠席は正確、で扱ってください",
            "我的位置请按大约处理，缺席请按精确处理",
          ],
        ],
        boss: [
          [
            "I will confirm once I am in a room the invite agrees with",
            "招待と合意できる部屋に入ったら、連絡します",
            "等我进了一间和邀请意见一致的房间，我就说一声",
          ],
          [
            "You should have the meeting. I am still in the floor plan",
            "会議はお進めください。私はまだ平面図の中です",
            "会请您先开。我还在平面图里",
          ],
          [
            "I will send the update from a corridor with a name",
            "名前のある廊下から、更新を送ります",
            "我会从一条有名字的走廊把更新发出去",
          ],
        ],
        team: [
          [
            "If you see me, that is someone who found the room. Wish them well",
            "私を見たら、部屋を見つけた人です。健闘を祈ってください",
            "你们要是看见我，那是找到了房间的人。祝他顺利",
          ],
          [
            "I'll take the notes. I already have the steps",
            "議事は受け取ります。歩数のほうは足りています",
            "纪要我收。步数我已经够了",
          ],
          [
            "Go ahead. I am attending the hallway's standing room",
            "進めてください。廊下の立ち見席にいます",
            "你们开吧。我在走廊的站票区",
          ],
        ],
        client: [
          [
            "I am close enough to wave and not close enough to be useful",
            "手を振るには近く、役に立つには遠いです",
            "近到可以招手，远到帮不上忙",
          ],
          [
            "Please begin. I will not make my route part of your agenda",
            "始めてください。経路を、そちらの議題にはしません",
            "请开始。我不会把我的路线写进您的议程",
          ],
          [
            "You will have a note from me, not a travelogue",
            "届くのはメモで、旅行記ではありません",
            "您会收到一张说明，不是一篇游记",
          ],
        ],
      }
    ),
    absurd: family(
      "logistics",
      [
        [
          "The {meeting} is in a room that only exists on the invite",
          "{meeting}の部屋は、招待状の中にだけあります",
          "这场{meeting}的房间只存在于邀请里",
        ],
        [
          "I took the stairs between buildings and came out on yesterday",
          "建物のあいだの階段を上がったら、昨日に出ました",
          "我走了两栋楼之间的楼梯，出来的时候是昨天",
        ],
        [
          "My chair is attending. I was not on the shipping list",
          "椅子は出席しています。配送リストに私はいません",
          "椅子在出席。送货单上没有我",
        ],
        [
          "The elevator has accepted the meeting and declined the passengers",
          "エレベーターは会議を承諾し、乗客を辞退しました",
          "电梯接受了这场会，拒绝了乘客",
        ],
      ],
      [
        [
          "I am on the way. The way has a calendar of its own",
          "向かっています。道のほうにもカレンダーがあります",
          "我在路上。路自己也有一份日历",
        ],
        [
          "Facilities has marked me as furniture, which does not attend live",
          "施設管理が私を備品に分類しました。備品はリアルタイムで出席しません",
          "行政把我归进了家具。家具不实时出席",
        ],
        [
          "I would join by map pin, but the pin is in a different city of the floor plan",
          "地図のピンで参加したいのですが、ピンは平面図の別都市にあります",
          "我想用地图钉参加，可钉子落在平面图的另一座城市",
        ],
      ],
      {
        any: [
          [
            "Please start. I am geographically sincere and physically elsewhere",
            "始めてください。地理的には誠実で、物理的には別の場所です",
            "你们先开。地理上我很真诚，物理上我在别处",
          ],
          [
            "I will attend as a dot on the map. The dot is punctual",
            "地図上の点として出席します。点は時間に正確です",
            "我会作为地图上的一个点出席。点很守时",
          ],
          [
            "Hold the meeting. I will hold the hallway",
            "会議はお持ちください。廊下は私が持ちます",
            "会你们开。走廊我来守着",
          ],
        ],
        boss: [
          [
            "Consider the chair a delegate. It has never spoken over anyone",
            "椅子を代理と見なしてください。誰の話も遮ったことがありません",
            "请把椅子视为代表。它从没打断过任何人",
          ],
          [
            "I will report in once I rejoin the correct week",
            "正しい週に戻ったら、報告します",
            "等我回到正确的那一周，我就汇报",
          ],
          [
            "Please proceed. My absence is a facilities issue, according to facilities",
            "進めてください。欠席は施設の問題です。施設がそう言っています",
            "请先开。我的缺席是行政问题。行政自己这么说的",
          ],
        ],
        team: [
          [
            "If a chair joins muted, that is the delegate. Be kind to it",
            "ミュートの椅子が入ったら、代理です。やさしくしてください",
            "如果一把静音的椅子进来了，那是代表。请对它好一点",
          ],
          [
            "I'll annotate from the stairwell between days",
            "日と日のあいだの階段から、書き込みます",
            "我会从两天之间的楼梯间做批注",
          ],
          [
            "Go ahead. I already gave my steps to the meeting",
            "進めてください。歩数は、すでに会議へ渡してあります",
            "你们开吧。步数我已经交给这场会了",
          ],
        ],
        client: [
          [
            "A version of me with a location will follow up. This one is in transit between floors of time",
            "場所のあるほうの私が追って連絡します。今の私は、時間の階と階のあいだです",
            "有坐标的那个我稍后联系。现在这个，在时间的楼层之间",
          ],
          [
            "Please begin without the corridor. It had too many opinions",
            "廊下なしで始めてください。意見が多すぎました",
            "请在没有走廊的情况下开始。走廊的意见太多了",
          ],
          [
            "You will receive the work from a person who has found the building",
            "建物を見つけた人から、成果が届きます",
            "成果会由一个找到了大楼的人交给您",
          ],
        ],
      }
    ),
  };

  var equipment = {
    plausible: family(
      "equipment",
      [
        [
          "This laptop is installing an update it described as quick",
          "この端末が、「すぐ終わる」と書いた更新を入れています",
          "这台电脑正在安装一个自称很快的更新",
        ],
        [
          "The headset is in a room I can see and cannot use",
          "ヘッドセットは、見えて使えない部屋にあります",
          "耳机在一个看得见、进不去的房间里",
        ],
        [
          "The camera on this machine has retired, effective today",
          "この端末のカメラは、本日付で引退しました",
          "这台机器的摄像头今天退休，立即生效",
        ],
        [
          "Audio from my side would be a guess the {meeting} does not need",
          "こちらの音声は推測になり、{meeting}には不要です",
          "我这边的声音只会是猜测，这场{meeting}不需要",
        ],
      ],
      [
        [
          "I tested it. The test was the optimistic one",
          "試しました。楽観的だったのは試験のほうです",
          "我试过了。比较乐观的是那次测试",
        ],
        [
          "Restarting it would become the meeting",
          "再起動すると、再起動が会議になります",
          "重启它的话，重启就会变成这场会",
        ],
        [
          "I can type. That is the channel that still answers",
          "打てます。返事をする経路はそれだけです",
          "我还能打字。还肯回话的信道只剩这条",
        ],
      ],
      {
        any: [
          [
            "I would attend as a silent tile, and nobody asked for that",
            "無言の画面として出られますが、頼まれてはいません",
            "我可以作为一个不说话的小窗出席，没有人点过这个",
          ],
          [
            "My microphone has declined on my behalf",
            "マイクが、私の代理で辞退しました",
            "麦克风已经替我拒绝了",
          ],
          [
            "I will put it in writing, which is the version you can hear",
            "文章にします。聞こえるのは、その版です",
            "我写成文字。听得见的是那一版",
          ],
        ],
        boss: [
          [
            "The point will reach you in text, which boots faster than this laptop",
            "要点は文章で届きます。この端末より起動が速いです",
            "要点用文字送到。文字比这台电脑启动快",
          ],
          [
            "I will not make you watch a negotiation with a settings panel",
            "設定画面との交渉は、お見せしません",
            "我不会让您看着我和设置面板谈判",
          ],
          [
            "Please go ahead. I will send the version that has sound",
            "進めてください。音のある版を送ります",
            "请先开。有声音的那一版我来发",
          ],
        ],
        team: [
          [
            "I refuse to be the frozen face in the corner",
            "隅で固まった顔には、なりません",
            "我拒绝当角落里那张卡住的脸",
          ],
          [
            "I'll put my part in the thread, fully loaded",
            "自分の分はスレッドに置きます。読み込みは終わっています",
            "我把自己的部分放到消息里，已经加载完",
          ],
          [
            "The update can attend. It says it is almost done",
            "更新に出てもらいます。本人はもうすぐ終わると言っています",
            "让更新去参加。它自称马上好",
          ],
        ],
        client: [
          [
            "I will send a note you can actually hear",
            "きちんと聞こえるメモを送ります",
            "我会发一封您确实听得见的说明",
          ],
          [
            "A working camera is not something I can offer this hour",
            "この時間にご用意できるものの中に、動くカメラはありません",
            "这个小时我能拿出的东西里，不包括一个能用的摄像头",
          ],
          [
            "You should have the content without the troubleshooting",
            "トラブル対応のつかない中身を、お渡しします",
            "您会拿到内容，不附带故障排查",
          ],
        ],
      }
    ),
    suspicious: family(
      "equipment",
      [
        [
          "My laptop is awake. The part that joins meetings is not",
          "端末は起きています。会議に入る部分は寝ています",
          "电脑醒着。负责开会的那一部分在睡",
        ],
        [
          "The {meeting} link opened a calendar, and the calendar opened another link",
          "{meeting}のリンクがカレンダーを開き、カレンダーが別のリンクを開きました",
          "这场{meeting}的链接打开了日历，日历又打开了另一个链接",
        ],
        [
          "I have headphones on. They are paired to a different week",
          "ヘッドホンは付けています。ペアリング先は別の週です",
          "耳机戴上了。它配对的是另一周",
        ],
        [
          "The camera shows a room I was in earlier, and it will not refresh",
          "カメラは、さっきまでいた部屋を映したまま更新しません",
          "摄像头还停在我刚才那间房间，并且拒绝刷新",
        ],
      ],
      [
        [
          "I have turned it off and on. It remembered the off",
          "切って、入れました。オフのほうを覚えていました",
          "我关过也开过。它记住的是关",
        ],
        [
          "The spinner is the only attendee with a perfect record",
          "読み込み中のくるくるだけが、皆勤です",
          "转圈是唯一全勤的出席者",
        ],
        [
          "Sound is working for everyone who is not me",
          "音が出ているのは、私以外の全員です",
          "除了我，所有人的声音都是好的",
        ],
      ],
      {
        any: [
          [
            "Please start. I would only contribute buffering",
            "始めてください。貢献できるのはバッファリングだけです",
            "你们先开。我能贡献的只有缓冲",
          ],
          [
            "I will send words, which do not need a codec",
            "言葉を送ります。コーデックは不要です",
            "我发文字。文字不需要编解码",
          ],
          [
            "Assume I nodded. The camera missed it on purpose",
            "うなずいたと見なしてください。カメラは意図的に見逃しました",
            "请默认我点了头。摄像头是故意没拍到",
          ],
        ],
        boss: [
          [
            "You will get the substance without the spinning wheel",
            "くるくるなしで、中身はお渡しします",
            "您会拿到正事，不附带那个转圈",
          ],
          [
            "I will not add a frozen portrait to your meeting",
            "止まった肖像は、会議に足しません",
            "我不会往您的会里再加一张冻住的肖像",
          ],
          [
            "Please go ahead. The laptop is attending a meeting of its own",
            "進めてください。端末は、自分の会議に出ています",
            "请先开。这台电脑在开它自己的会",
          ],
        ],
        team: [
          [
            "I'll post in the thread like a person who has audio",
            "音声がある人のように、スレッドへ書きます",
            "我会像一个有声音的人那样，把话写进消息里",
          ],
          [
            "If my tile appears, it is the laptop. It does not have the context",
            "画面に私が出たら、端末です。文脈は持っていません",
            "如果我的小窗出现了，那是电脑。它没有上下文",
          ],
          [
            "Go ahead. I am one restart away from being useful, and I will not take it",
            "進めてください。再起動一つで役に立つ距離ですが、押しません",
            "你们开吧。我离有用只差一次重启，而我不会按下去",
          ],
        ],
        client: [
          [
            "I can offer a written version that loads",
            "読み込める文章版なら、ご用意できます",
            "能加载出来的书面版，我可以提供",
          ],
          [
            "Please do not wait on a camera that is showing last Tuesday",
            "先週の火曜を映しているカメラは、待たないでください",
            "请别等一个还停在上周二的摄像头",
          ],
          [
            "You should hear the answer from something other than this microphone",
            "このマイク以外から、答えが聞こえるほうがよいです",
            "答案最好从这只麦克风以外的地方传到您那里",
          ],
        ],
      }
    ),
    absurd: family(
      "equipment",
      [
        [
          "My microphone only speaks in calendar notifications",
          "マイクが発する言葉は、カレンダー通知だけです",
          "我的麦克风只会说日历通知",
        ],
        [
          "The laptop joined the {meeting} without me and is doing fine",
          "端末が私なしで{meeting}に入り、順調です",
          "电脑没带我进了这场{meeting}，而且状态很好",
        ],
        [
          "I updated the updater. Both of us now need a moment",
          "更新するための更新を入れました。両者とも、少し時間が要ります",
          "我更新了负责更新的那个东西。我们两个都需要一会儿",
        ],
        [
          "The camera has unionized and will not cross a loading bar",
          "カメラが組合を作り、読み込みバーを越えなくなりました",
          "摄像头组建了工会，拒绝越过加载条",
        ],
      ],
      [
        [
          "Technical support is me, and I have declined the ticket",
          "技術サポートは私で、そのチケットは辞退しました",
          "技术支持就是我，而我拒绝了这张工单",
        ],
        [
          "The device is in a meeting with the network. I was not invited",
          "端末はネットワークと会議中です。私は招待されていません",
          "设备和网络正在开会。没有邀请我",
        ],
        [
          "I can hear you. You should be grateful you cannot hear the laptop",
          "そちらは聞こえています。端末が聞こえないのは、幸いです",
          "我听得见你们。你们听不见这台电脑，是幸运",
        ],
      ],
      {
        any: [
          [
            "Please start. My bandwidth is attending a longer meeting",
            "始めてください。帯域は、もっと長い会議に出ています",
            "你们先开。我的带宽在参加一场更长的会",
          ],
          [
            "I will contribute in plain text, which has no driver",
            "プレーンテキストで貢献します。ドライバが要りません",
            "我用纯文本做贡献。纯文本没有驱动",
          ],
          [
            "The laptop sends its regrets, and I am the regrets",
            "端末が欠席の連絡を出しました。その欠席が私です",
            "电脑发来了歉意。那份歉意就是我",
          ],
        ],
        boss: [
          [
            "You will receive a memo from the only component still taking instruction",
            "指示をまだ受ける部品から、メモが届きます",
            "您会收到一份备忘，来自还肯听指令的那个零件",
          ],
          [
            "Please treat the silence as a successful mute, managed by the hardware",
            "この沈黙は、ハードウェアが管理する成功したミュートです",
            "这段沉默是硬件管理的一次成功静音",
          ],
          [
            "I approve the meeting. The camera has filed a dissent",
            "会議は承認します。カメラが反対意見を出しました",
            "会我批准。摄像头提交了异议",
          ],
        ],
        team: [
          [
            "If a laptop joins without a face, offer it the notes and nothing else",
            "顔のない端末が入ったら、議事だけ渡してください",
            "如果一台没有脸的电脑进来了，只给它纪要",
          ],
          [
            "I'll type from the side of the update that still likes me",
            "まだ私を嫌っていないほうの更新の脇から、打ちます",
            "我会在还没讨厌我的那一侧更新旁边打字",
          ],
          [
            "Go ahead. My tile is unionized and will not cross the call",
            "進めてください。私の画面は組合に入り、通話を越えません",
            "你们开吧。我的小窗加入了工会，拒绝越过这通电话",
          ],
        ],
        client: [
          [
            "A human-readable follow-up is the most advanced format available",
            "人が読める追っての連絡が、今いちばん高度な形式です",
            "人能读的后续说明，是目前最先进的格式",
          ],
          [
            "Please do not wait for a device that has its own offsite",
            "自分の合宿を持っている端末は、待たないでください",
            "请别等一台自己有团建的设备",
          ],
          [
            "You will get the answer from me, not from the spinner",
            "答えは私から届きます。くるくるからではありません",
            "答案由我交给您，不是由那个转圈交给您",
          ],
        ],
      }
    ),
  };

  var agenda = {
    plausible: family(
      "agenda",
      [
        [
          "The agenda for the {meeting} is \"agenda TBD\", which I am treating as done",
          "{meeting}の議題は「議題未定」です。完了として扱います",
          "这场{meeting}的议程是「议程待定」。我把它视为已经完成",
        ],
        [
          "There is no agenda, and I have already attended that meeting",
          "議題がありません。その会議には、もう出たことがあります",
          "没有议程。那种会，我参加过了",
        ],
        [
          "Everything on the invite would arrive sooner as a message",
          "招待に書いてあることは、メッセージなら先に着きます",
          "邀请上这些事，写成消息会到得更早",
        ],
        [
          "The {meeting} is optional on the invite and mandatory only in the air",
          "{meeting}は招待の上では任意で、空気の中だけ必須です",
          "这场{meeting}在邀请里是自愿的，只在气氛里是必须的",
        ],
      ],
      [
        [
          "I looked for a decision that needs me live, and did not find one",
          "その場の私が要る決定を探して、見つかりませんでした",
          "我找了一下有没有必须我在场的决定，没找到",
        ],
        [
          "A short note can do the work the hour was going to point at",
          "短いメモが、この一時間が指さそうとしていた仕事をします",
          "一段短说明，就够做完这一小时要办的事",
        ],
        [
          "I have prepared the silence I would have contributed",
          "貢献するはずだった沈黙は、用意してあります",
          "我本来会贡献的那段沉默，已经备好了",
        ],
      ],
      {
        any: [
          [
            "Send the notes. I will disagree on time, if there is a reason",
            "議事を送ってください。理由があれば、時間どおりに反対します",
            "把纪要发来。有理由的话，我会准时反对",
          ],
          [
            "Please do this in writing. That version has an ending",
            "文章で進めてください。終わりがあるのは、その版です",
            "请用文字推进。有结尾的是那一版",
          ],
          [
            "I decline the live part and accept the document",
            "その場の部分は辞退し、文書は受け取ります",
            "现场的部分我辞了，文档我收",
          ],
        ],
        boss: [
          [
            "I will send my view in a form that has a chance of being short",
            "短くなる可能性のある形で、見解を出します",
            "看法我会写成还有机会变短的形式",
          ],
          [
            "You can have the answer without a meeting for the answer",
            "答えのための会議なしで、答えだけお渡しできます",
            "不必为了答案再开一场，答案本身可以给你",
          ],
          [
            "Please go ahead. I will read the outcome and not schedule a sequel",
            "進めてください。結果は読みます。続編は入れません",
            "请先开。我会读结果，并且不安排续集",
          ],
        ],
        team: [
          [
            "Three lines will do, whether you hold the room or not",
            "部屋を使うかどうかは別として、三行で足ります",
            "房间开不开都行，三行就够",
          ],
          [
            "I'll comment on the doc, which is the meeting I was hoping for",
            "文書にコメントします。望んでいた会議は、そちらです",
            "我会在文档里评论。我希望的那场会，就是那份文档",
          ],
          [
            "If you want the room, take it. I want the notes",
            "部屋が要るなら使ってください。私は議事が要ります",
            "你们要房间就用。我要的是纪要",
          ],
        ],
        client: [
          [
            "I will reply with the points that are actually points",
            "要点と呼べるものだけ、返信します",
            "我只回复那些确实算要点的点",
          ],
          [
            "A note will be faster than the {meeting}, and easier to forward",
            "メモのほうが{meeting}より速く、転送も楽です",
            "一封说明会比这场{meeting}更快，也更好转发",
          ],
          [
            "Please take this as a yes to the work and a no to the call",
            "仕事には賛成、通話には辞退、で受け取ってください",
            "请当成：事情我接，这通电话我辞",
          ],
        ],
      }
    ),
    suspicious: family(
      "agenda",
      [
        [
          "The {meeting} has an agenda, and the agenda is the phrase \"quick sync\"",
          "{meeting}に議題はあります。議題は「クイックシンク」という語です",
          "这场{meeting}有议程。议程就是「快速同步」这四个字",
        ],
        [
          "I have been to this meeting. It was wearing a different title",
          "この会議には出たことがあります。別の件名を着ていました",
          "这场会我去过。它当时穿着另一个标题",
        ],
        [
          "The only decision on the invite is whether to have the {meeting}",
          "招待にある決定事項は、{meeting}をやるかどうかだけです",
          "邀请上唯一的决定，是这场{meeting}开不开",
        ],
        [
          "Twelve people are optional, which is a kind of answer",
          "十二人が任意です。あれも一つの答えです",
          "十二个人都是可选的。这也是一种答案",
        ],
      ],
      [
        [
          "I searched the invite for a verb. I found calendar nouns",
          "招待から動詞を探しました。見つかったのは予定の名詞です",
          "我在邀请里找动词。找到的是日程名词",
        ],
        [
          "A message already contains the meeting. The meeting does not",
          "メッセージのほうには会議が入っています。会議のほうには入っていません",
          "消息里已经有这场会了。这场会里还没有",
        ],
        [
          "I prepared remarks. They were three words, and they did not need a room",
          "発言を用意しました。三語で、部屋は不要でした",
          "我准备了发言。一共三个词，不需要房间",
        ],
      ],
      {
        any: [
          [
            "Please send the sentence this hour was going to become",
            "この一時間がなるはずだった一文を、送ってください",
            "请把这一小时本来会变成的那句话发给我",
          ],
          [
            "I accept the agenda and decline the gathering",
            "議題は受諾し、集まることだけ辞退します",
            "议程我接受，聚在一起我辞",
          ],
          [
            "We can pretend I asked the insightful question. It was \"why live\"",
            "鋭い質問はしたことにしてください。「なぜリアルタイムか」です",
            "就当我问过那个尖锐的问题。问题是「为什么要实时」",
          ],
        ],
        boss: [
          [
            "I will answer the question the meeting has not written down yet",
            "会議がまだ書いていない質問に、答えます",
            "会还没写下来的那个问题，我来答",
          ],
          [
            "You can have a recommendation without a round of introductions",
            "自己紹介の一周なしで、提案だけ出せます",
            "不必轮流自我介绍，建议可以直接给",
          ],
          [
            "Please take the decision. The agenda will not grow a decision on its own",
            "決定はお取りください。議題は自分では決定を育てません",
            "决定请您来做。议程自己长不出决定",
          ],
        ],
        team: [
          [
            "Post the question. I will answer it before the room gets comfortable",
            "質問を書いてください。部屋が落ち着く前に答えます",
            "把问题发出来。我会在房间还没坐热之前回答",
          ],
          [
            "I'll edit the doc. That is the sync, without the sync",
            "文書を直します。シンクなしのシンクです",
            "我来改文档。那是一次没有同步的同步",
          ],
          [
            "If it could be a message, I will meet you in the message",
            "メッセージで済むなら、メッセージのほうで会いましょう",
            "如果一条消息就够，我们就在消息里见",
          ],
        ],
        client: [
          [
            "I will answer in a form you can forward without calling it a meeting",
            "会議と呼ばずに転送できる形で、答えます",
            "我会用一种转发时不必称之为会议的形式来答",
          ],
          [
            "The work is welcome. The assembly around the work can wait",
            "仕事は歓迎です。仕事の周囲の集会は、待てます",
            "事情我接。围着事情的集合可以再等等",
          ],
          [
            "Please read this as attention to the point, not distance from it",
            "要点から離れたのではなく、要点を見ていると読んでください",
            "请读成我在看要点，而不是离要点很远",
          ],
        ],
      }
    ),
    absurd: family(
      "agenda",
      [
        [
          "The agenda is a link to the agenda, and the link is this {meeting}",
          "議題は議題へのリンクで、そのリンクがこの{meeting}です",
          "议程是一个指向议程的链接，那个链接就是这场{meeting}",
        ],
        [
          "I attended the pre-meeting. The meeting was the pre-meeting for another pre-meeting",
          "事前会議に出ました。その会議は、別の事前会議の事前会議でした",
          "我参加了预备会。那场会是另一场预备会的预备会",
        ],
        [
          "The {meeting} exists so the calendar does not look empty, and the calendar looks fine",
          "{meeting}はカレンダーを空に見せないためにあり、カレンダーはもう平気そうです",
          "这场{meeting}是为了不让日历显得空。日历看起来已经没事了",
        ],
        [
          "Every item is \"align\", and I am already parallel to the floor",
          "項目はすべて「揃える」です。私はすでに床と平行です",
          "每一项都是「对齐」。我已经和地板平行了",
        ],
      ],
      [
        [
          "I brought a decision. The agenda asked me to leave it outside",
          "決定を持っていきました。議題に、外に置いてくるよう言われました",
          "我带了一个决定。议程让我把它放在门外",
        ],
        [
          "The meeting can be an email. The email can be a sentence. The sentence can be no",
          "会議はメールになれます。メールは一文になれます。一文は「否」になれます",
          "这场会可以是一封邮件。邮件可以是一句话。这句话可以是「不」",
        ],
        [
          "I read the agenda until it became a haiku, and the haiku declined",
          "議題を読んでいるうちに俳句になり、俳句が辞退しました",
          "议程我读着读着变成了俳句，俳句拒绝出席",
        ],
      ],
      {
        any: [
          [
            "Please send the verb. I will bring my own noun",
            "動詞を送ってください。名詞は持参します",
            "请把动词发来。名词我自备",
          ],
          [
            "I move to adjourn a meeting that has not found its purpose",
            "目的を見つけていない会議の閉会を提案します",
            "我提议一场还没找到目的的会现在闭会",
          ],
          [
            "Consider me aligned, perpendicular, and elsewhere",
            "方向は揃い、角度は直角、所在は別、でお願いします",
            "方向已对齐，角度是垂直，人在别处",
          ],
        ],
        boss: [
          [
            "I support the outcome. I have not been shown one, so this is advance work",
            "結果には賛成です。まだ見せられていないので、先行作業です",
            "我支持结果。还没人给我看结果，所以这是提前作业",
          ],
          [
            "You may record my vote as present in spirit, absent in calendar",
            "票は「精神は出席、カレンダーは欠席」で記録してください",
            "我的票可以记成：精神出席，日历缺席",
          ],
          [
            "Please end on time, including the time before it starts",
            "開始前の時間も含めて、時間どおりに終えてください",
            "请准时结束，包括它开始之前的那段时间",
          ],
        ],
        team: [
          [
            "I'll be in the doc, aligning the headings with reality",
            "文書の中で、見出しを現実と揃えています",
            "我在文档里，把标题和现实对齐",
          ],
          [
            "If anyone finds an agenda item with a verb, tag me",
            "動詞のある議題を見つけたら、私を呼んでください",
            "谁要是找到一个带动词的议程项，叫我",
          ],
          [
            "We can sync by not syncing. I am free for that",
            "揃えないことで揃えられます。その枠は空いています",
            "我们可以通过不对齐来对齐。那个时段我有空",
          ],
        ],
        client: [
          [
            "I am aligned with the work and perpendicular to the invitation",
            "仕事とは平行で、招待とは直角です",
            "我和事情平行，和这封邀请垂直",
          ],
          [
            "A sentence from me will contain more agenda than the agenda",
            "私からの一文のほうが、議題より議題を含みます",
            "我写的一句话，会比议程更像议程",
          ],
          [
            "Please take the hour back. The purpose and I will meet in writing",
            "一時間はお返しください。目的とは文章で会います",
            "这个小时请收回。目的和我会在文字里见面",
          ],
        ],
      }
    ),
  };

  var families = {
    plausible: [
      calendar.plausible,
      overlap.plausible,
      logistics.plausible,
      equipment.plausible,
      agenda.plausible,
    ],
    suspicious: [
      calendar.suspicious,
      overlap.suspicious,
      logistics.suspicious,
      equipment.suspicious,
      agenda.suspicious,
    ],
    absurd: [
      calendar.absurd,
      overlap.absurd,
      logistics.absurd,
      equipment.absurd,
      agenda.absurd,
    ],
  };

  root.EXCUSES = {
    meetings: [
      { id: "standup", minutes: 15, label: { en: "standup", ja: "朝会", zh: "站会" } },
      { id: "allhands", minutes: 60, label: { en: "all-hands", ja: "全社会議", zh: "全员会" } },
      { id: "oneonone", minutes: 30, label: { en: "1:1", ja: "1on1", zh: "一对一" } },
      { id: "sync", minutes: 15, label: { en: "quick sync", ja: "クイックシンク", zh: "快速同步" } },
      { id: "client", minutes: 45, label: { en: "client call", ja: "クライアント会議", zh: "客户会" } },
    ],
    tones: ["plausible", "suspicious", "absurd"],
    audiences: ["any", "boss", "team", "client"],
    shapes: 3,
    families: families,
  };

  return root.EXCUSES;
})(typeof globalThis !== "undefined" ? globalThis : this);
