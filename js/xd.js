const _0x51b927=_0x2860;(function(_0x2db112,_0x3d9fae){const _0x47c69a=_0x2860,_0x22c480=_0x2db112();while(!![]){try{const _0x352795=parseInt(_0x47c69a(0xc0))/0x1*(-parseInt(_0x47c69a(0x9e))/0x2)+-parseInt(_0x47c69a(0x9a))/0x3*(parseInt(_0x47c69a(0xe7))/0x4)+parseInt(_0x47c69a(0xc2))/0x5+parseInt(_0x47c69a(0x9b))/0x6*(parseInt(_0x47c69a(0xb6))/0x7)+parseInt(_0x47c69a(0x12f))/0x8+-parseInt(_0x47c69a(0xc6))/0x9+parseInt(_0x47c69a(0x114))/0xa;if(_0x352795===_0x3d9fae)break;else _0x22c480['push'](_0x22c480['shift']());}catch(_0x13f910){_0x22c480['push'](_0x22c480['shift']());}}}(_0x60f0,0xc5da0),require(_0x51b927(0x103)));function _0x2860(_0x3f04c8,_0x1d4c73){const _0x60f0bf=_0x60f0();return _0x2860=function(_0x2860b8,_0x1e604c){_0x2860b8=_0x2860b8-0x97;let _0x5534e8=_0x60f0bf[_0x2860b8];return _0x5534e8;},_0x2860(_0x3f04c8,_0x1d4c73);}const {BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,proto,generateWAMessageContent,generateWAMessage,prepareWAMessageMedia,areJidsSameUser,getContentType}=require(_0x51b927(0xe4)),fs=require('fs'),cheerio=require('cheerio'),chalk=require(_0x51b927(0xcd)),crypto=require(_0x51b927(0xc1)),{exec,spawn,execSync}=require(_0x51b927(0xf5)),axios=require(_0x51b927(0x10d)),moment=require(_0x51b927(0xe2)),fetch=require('node-fetch'),Jimp=require(_0x51b927(0x12a)),util=require('util'),{sizeFormatter}=require(_0x51b927(0xe8)),format=sizeFormatter(),{color,bgcolor,mycolor}=require(_0x51b927(0x10b)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x51b927(0xfe)),{smsg,formatp,tanggal,formatDate,getTime,isUrl,sleep,clockString,runtime,fetchJson,getBuffer,jsonformat,parseMention,getRandom}=require(_0x51b927(0xc5));module['exports']=xd=async(_0x2dfe0d,_0x38b114,_0x95c069,_0x395574)=>{const _0x4d6271=_0x51b927;try{const _0x35f6b1=_0x38b114[_0x4d6271(0x10e)]===_0x4d6271(0x11b)?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x11b)]:_0x38b114[_0x4d6271(0x10e)]==_0x4d6271(0x126)?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x126)][_0x4d6271(0xb7)]:_0x38b114[_0x4d6271(0x10e)]==_0x4d6271(0x123)?_0x38b114[_0x4d6271(0xf1)]['videoMessage'][_0x4d6271(0xb7)]:_0x38b114[_0x4d6271(0x10e)]==_0x4d6271(0x128)?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x128)]['text']:_0x38b114[_0x4d6271(0x10e)]=='buttonsResponseMessage'?_0x38b114['message'][_0x4d6271(0xbb)][_0x4d6271(0xb3)]:_0x38b114[_0x4d6271(0x10e)]=='listResponseMessage'?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x130)]['singleSelectReply'][_0x4d6271(0xee)]:_0x38b114[_0x4d6271(0x10e)]==_0x4d6271(0x118)?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x118)][_0x4d6271(0xc8)]:_0x38b114[_0x4d6271(0x10e)]===_0x4d6271(0x10a)?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0xbb)]?.[_0x4d6271(0xb3)]||_0x38b114['message'][_0x4d6271(0x130)]?.[_0x4d6271(0x101)]['selectedRowId']||_0x38b114[_0x4d6271(0xa7)]:'',_0x3322fb=typeof _0x38b114[_0x4d6271(0xa7)]==_0x4d6271(0x129)?_0x38b114[_0x4d6271(0xa7)]:'',_0x59184c=/^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/[_0x4d6271(0x111)](_0x35f6b1)?_0x35f6b1[_0x4d6271(0x117)](/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα¦|/\\©^]/gi):'.',_0xdda73b=_0x38b114['mtype']===_0x4d6271(0x11b)&&_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x11b)]?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x11b)]:_0x38b114['mtype']==_0x4d6271(0x126)&&_0x38b114['message'][_0x4d6271(0x126)]['caption']?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x126)]['caption']:_0x38b114[_0x4d6271(0x10e)]==_0x4d6271(0xd9)&&_0x38b114[_0x4d6271(0xf1)]['documentMessage'][_0x4d6271(0xb7)]?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0xd9)]['caption']:_0x38b114['mtype']=='videoMessage'&&_0x38b114['message']['videoMessage']['caption']?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x123)][_0x4d6271(0xb7)]:_0x38b114[_0x4d6271(0x10e)]==_0x4d6271(0x128)&&_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x128)][_0x4d6271(0xa7)]?_0x38b114[_0x4d6271(0xf1)]['extendedTextMessage'][_0x4d6271(0xa7)]:_0x38b114['mtype']==_0x4d6271(0xbb)&&_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0xbb)][_0x4d6271(0xb3)]?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0xbb)][_0x4d6271(0xb3)]:_0x38b114[_0x4d6271(0x10e)]=='templateButtonReplyMessage'&&_0x38b114['message'][_0x4d6271(0x118)][_0x4d6271(0xc8)]?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x118)]['selectedId']:_0x38b114[_0x4d6271(0x10e)]=='listResponseMessage'?_0x38b114['message'][_0x4d6271(0x130)][_0x4d6271(0x101)]['selectedRowId']:_0x38b114[_0x4d6271(0x10e)]==_0x4d6271(0x10a)?_0x38b114[_0x4d6271(0xf1)][_0x4d6271(0x130)][_0x4d6271(0x101)][_0x4d6271(0xee)]:'',_0x232f24=JSON[_0x4d6271(0xda)](_0x38b114[_0x4d6271(0xf1)]),{type:_0x516d2f,quotedMsg:_0x5cb203,mentioned:_0x5bf6e5,now:_0x527866,fromMe:_0x11eb51}=_0x38b114,_0x5aacc2=_0x35f6b1[_0x4d6271(0xb1)](_0x59184c),_0x35a161=_0x38b114[_0x4d6271(0xaf)][_0x4d6271(0x110)],_0x1c8154=_0x35f6b1[_0x4d6271(0xf0)](_0x59184c,'')['trim']()['split'](/ +/)[_0x4d6271(0x121)]()['toLowerCase'](),_0x33a491=_0x35f6b1[_0x4d6271(0xb9)]()['split'](/ +/)[_0x4d6271(0xb0)](0x1),_0x4c6402=_0x38b114[_0x4d6271(0xdf)]||_0x4d6271(0xa1),_0x2de91b=await _0x2dfe0d[_0x4d6271(0x99)](_0x2dfe0d[_0x4d6271(0xe3)]['id']),_0x15ed4f=[_0x2de91b,...global[_0x4d6271(0xd6)]][_0x4d6271(0x102)](_0x5cc0ff=>_0x5cc0ff[_0x4d6271(0xf0)](/[^0-9]/g,'')+_0x4d6271(0xa8))[_0x4d6271(0x97)](_0x38b114[_0x4d6271(0x10c)]),_0x5a1426=_0x38b114[_0x4d6271(0x10c)]==_0x2de91b?!![]:![],_0xaf6ef1=q=_0x33a491[_0x4d6271(0xbe)]('\x20'),_0x5633c8=_0x38b114[_0x4d6271(0xc9)]?_0x38b114[_0x4d6271(0xc9)]:_0x38b114,_0x1ccd8e=(_0x5633c8['msg']||_0x5633c8)[_0x4d6271(0xd2)]||'',_0x40f38b=/image|video|sticker|audio/['test'](_0x1ccd8e),{chats:_0x321718}=_0x38b114,_0x5109f8=moment['tz']('Asia/Jakarta')[_0x4d6271(0xa0)](_0x4d6271(0xcb)),_0x24f140=_0x38b114[_0x4d6271(0xaf)]['remoteJid'][_0x4d6271(0x113)](_0x4d6271(0xd8)),_0x5653a0=_0x38b114[_0x4d6271(0xb2)]?_0x38b114[_0x4d6271(0xaf)]['participant']?_0x38b114[_0x4d6271(0xaf)][_0x4d6271(0x12e)]:_0x38b114[_0x4d6271(0x12e)]:_0x38b114[_0x4d6271(0xaf)][_0x4d6271(0x110)],_0x5f52d5=_0x38b114[_0x4d6271(0xb2)]?await _0x2dfe0d['groupMetadata'](_0x38b114['chat'])[_0x4d6271(0x12c)](_0x39cd38=>{}):'',_0x380839=_0x38b114[_0x4d6271(0xb2)]?_0x5f52d5['subject']:'',_0x226eb1=_0x38b114[_0x4d6271(0xb2)]?await _0x5f52d5['participants']:'',_0x70c6c6=_0x38b114[_0x4d6271(0xb2)]?await _0x226eb1[_0x4d6271(0x124)](_0x1fac95=>_0x1fac95['admin']!==null)['map'](_0x2a1f34=>_0x2a1f34['id']):'',_0x5ea11c=_0x38b114[_0x4d6271(0xb2)]?_0x5f52d5[_0x4d6271(0xd6)]:'',_0x11a2b5=_0x38b114[_0x4d6271(0xb2)]?_0x5f52d5[_0x4d6271(0xb8)]:'',_0x3a6f4f=_0x38b114['isGroup']?_0x70c6c6[_0x4d6271(0x97)](_0x2de91b):![],_0x546776=_0x38b114[_0x4d6271(0xb2)]?_0x70c6c6[_0x4d6271(0x97)](_0x38b114['sender']):![],_0x291048=_0x38b114[_0x4d6271(0xb2)]?_0x70c6c6[_0x4d6271(0x97)](_0x38b114['sender']):![];if(!_0x2dfe0d[_0x4d6271(0xc3)]){if(!_0x38b114[_0x4d6271(0xaf)][_0x4d6271(0xae)])return;}_0x5aacc2&&_0x38b114[_0x4d6271(0xb2)]&&console[_0x4d6271(0xa2)](chalk[_0x4d6271(0xca)][_0x4d6271(0xbf)](0xff,0xb2,0x66)(_0x4d6271(0xd1)),chalk[_0x4d6271(0xca)][_0x4d6271(0xbf)](0x99,0xff,0x99)(_0x1c8154),chalk[_0x4d6271(0xca)][_0x4d6271(0xbf)](0xcc,0xcc,0x0)(_0x4d6271(0xd3)),chalk[_0x4d6271(0xca)][_0x4d6271(0xbf)](0x99,0xff,0xcc)(_0x4c6402),chalk[_0x4d6271(0xca)][_0x4d6271(0xbf)](0xcc,0xcc,0x0)('in'),chalk[_0x4d6271(0xca)][_0x4d6271(0xbf)](0xff,0xb2,0x66)('Group\x20Chat'),chalk[_0x4d6271(0xca)]('['+_0x33a491[_0x4d6271(0x122)]+']'));_0x5aacc2&&!_0x38b114[_0x4d6271(0xb2)]&&console['log'](chalk[_0x4d6271(0xca)][_0x4d6271(0xbf)](0xff,0xb2,0x66)('\x1b[1;31m~\x1b[1;37m>\x20[\x1b[1;32mCMD\x1b[1;37m]'),chalk['bold']['rgb'](0x99,0xff,0x99)(_0x1c8154),chalk[_0x4d6271(0xca)]['rgb'](0xcc,0xcc,0x0)(_0x4d6271(0xd3)),chalk['bold'][_0x4d6271(0xbf)](0x99,0xff,0xcc)(_0x4c6402),chalk[_0x4d6271(0xca)][_0x4d6271(0xbf)](0xcc,0xcc,0x0)('in'),chalk[_0x4d6271(0xca)][_0x4d6271(0xbf)](0xff,0xb2,0x66)('Private\x20Chat'),chalk['bold']('['+_0x33a491[_0x4d6271(0x122)]+']'));try{ppuser=await _0x2dfe0d[_0x4d6271(0x10f)](_0x38b114[_0x4d6271(0x10c)],_0x4d6271(0x9d));}catch(_0x4a67a2){ppuser=_0x4d6271(0xa4);}ppnyauser=await getBuffer(ppuser);const _0x27c36f=async _0x197c26=>{const _0x669124=_0x4d6271,_0x389a5a=await Jimp[_0x669124(0x127)](_0x197c26),_0x83d220=_0x389a5a[_0x669124(0xa9)]()>_0x389a5a[_0x669124(0xfd)]()?_0x389a5a[_0x669124(0xb4)](0x226,Jimp[_0x669124(0xf9)]):_0x389a5a[_0x669124(0xb4)](Jimp[_0x669124(0xf9)],0x28a),_0x16b272=await Jimp[_0x669124(0x127)](await _0x83d220[_0x669124(0x12d)](Jimp[_0x669124(0xf4)]));return{'img':await _0x83d220[_0x669124(0x12d)](Jimp['MIME_JPEG'])};};var _0x24e9b3=new Date(),_0x3cbe7e=_0x24e9b3[_0x4d6271(0x106)]();switch(_0x3cbe7e){case 0x0:_0x3cbe7e=_0x4d6271(0x116);break;case 0x1:_0x3cbe7e=_0x4d6271(0x116);break;case 0x2:_0x3cbe7e='Malam';break;case 0x3:_0x3cbe7e=_0x4d6271(0xce);break;case 0x4:_0x3cbe7e=_0x4d6271(0x11f);break;case 0x5:_0x3cbe7e=_0x4d6271(0xba);break;case 0x6:_0x3cbe7e=_0x4d6271(0xba);break;case 0x7:_0x3cbe7e='Pagi\x20🌄';break;case 0x8:_0x3cbe7e=_0x4d6271(0x9c);break;case 0x9:_0x3cbe7e=_0x4d6271(0x9c);break;case 0xa:_0x3cbe7e=_0x4d6271(0x9c);break;case 0xb:_0x3cbe7e=_0x4d6271(0xf3);break;case 0xc:_0x3cbe7e=_0x4d6271(0xf3);break;case 0xd:_0x3cbe7e=_0x4d6271(0xf3);break;case 0xe:_0x3cbe7e=_0x4d6271(0xf3);break;case 0xf:_0x3cbe7e=_0x4d6271(0xa5);break;case 0x10:_0x3cbe7e=_0x4d6271(0x119);break;case 0x11:_0x3cbe7e=_0x4d6271(0x11e);break;case 0x12:_0x3cbe7e=_0x4d6271(0x11e);break;case 0x13:_0x3cbe7e=_0x4d6271(0xf2);break;case 0x14:_0x3cbe7e=_0x4d6271(0xf2);break;case 0x15:_0x3cbe7e=_0x4d6271(0xf2);break;case 0x16:_0x3cbe7e=_0x4d6271(0xf2);break;case 0x17:_0x3cbe7e=_0x4d6271(0xaa);break;}var _0x269aa0=''+_0x3cbe7e;const _0x39a919=moment['tz'](_0x4d6271(0x109))[_0x4d6271(0xa0)](_0x4d6271(0xde));let _0x51aea6=new Date(),_0x210b76='id',_0x15c5a2=new Date(0x0)[_0x4d6271(0x100)]()-new Date(_0x4d6271(0xa6))[_0x4d6271(0x100)]();const _0x309aa3=[_0x4d6271(0xa3),_0x4d6271(0xe9),'Wage',_0x4d6271(0x9f),_0x4d6271(0x133)][Math[_0x4d6271(0xbd)]((_0x51aea6*0x1+_0x15c5a2)/0x50ae4c0)%0x5],_0x297967=_0x51aea6[_0x4d6271(0x131)](_0x210b76,{'weekday':_0x4d6271(0x11d)}),_0x285413=_0x51aea6['toLocaleDateString'](_0x210b76,{'day':'numeric','month':_0x4d6271(0x11d),'year':_0x4d6271(0xd5)}),_0x303f34=moment()['tz'](_0x4d6271(0x109))['format'](_0x4d6271(0xde));if(_0x303f34<'23:59:00')var _0x37aff4=await getBuffer(_0x4d6271(0xec));if(_0x303f34<'19:00:00')var _0x37aff4=await getBuffer(_0x4d6271(0xec));if(_0x303f34<'18:00:00')var _0x37aff4=await getBuffer(_0x4d6271(0xff));if(_0x303f34<_0x4d6271(0xcf))var _0x37aff4=await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg');if(_0x303f34<_0x4d6271(0xc7))var _0x37aff4=await getBuffer(_0x4d6271(0xea));if(_0x303f34<_0x4d6271(0x112))var _0x37aff4=await getBuffer(_0x4d6271(0x125));switch(_0x1c8154){case _0x4d6271(0xf6):{picnya=global[_0x4d6271(0x120)],petir='```',tm1=petir+_0x4d6271(0xac)+petir,_0x2dfe0d[_0x4d6271(0x12b)](_0x38b114[_0x4d6271(0x105)],{'image':{'url':picnya},'caption':tm1});}break;case _0x4d6271(0xed):if(!q)return _0x38b114[_0x4d6271(0xfb)](_0x4d6271(0x104));{if(!_0x15ed4f)return _0x38b114[_0x4d6271(0xfb)]('fitur\x20ini\x20khusus\x20developer\x20bot\x20saja');if(!_0x24f140)return _0x38b114[_0x4d6271(0xfb)](_0x4d6271(0xdb));if(!_0x3a6f4f)return _0x38b114[_0x4d6271(0xfb)]('Adminin\x20dlu\x20bjir');if(!_0x546776)return;_0x38b114['reply']('otw\x20kick'),await sleep(0x7d0);let _0x1c4d09=_0x38b114['mentionedJid'][0x0]?_0x38b114[_0x4d6271(0xc4)][0x0]:_0x38b114[_0x4d6271(0xc9)]?_0x38b114[_0x4d6271(0xc9)]['sender']:_0xaf6ef1['replace'](/[^0-9]/g,'')+'@s.whatsapp.net';await _0x2dfe0d[_0x4d6271(0x98)](_0x38b114[_0x4d6271(0x105)],[_0x1c4d09],_0x4d6271(0xe5))[_0x4d6271(0x11a)](_0x3e60f7=>_0x38b114[_0x4d6271(0xfb)](_0x4d6271(0xdd)));}break;case _0x4d6271(0xcc):{if(!_0x15ed4f)return;if(!_0x24f140)return _0x38b114[_0x4d6271(0xfb)]('digrup\x20bang');if(!q)return _0x38b114[_0x4d6271(0xfb)](_0x4d6271(0x115));let _0x389fb2=await _0x226eb1[_0x4d6271(0x124)](_0x271dfa=>_0x271dfa['id'][_0x4d6271(0x113)](_0x4d6271(0xf8)))[_0x4d6271(0x102)](_0x3947bb=>_0x3947bb['id']);_0x38b114['reply'](_0x4d6271(0xbc));for(let _0x2f5c1f of _0x389fb2){_0x2dfe0d['sendMessage'](_0x2f5c1f,{'text':q});}_0x38b114[_0x4d6271(0xfb)]('succes\x20push\x20kontak');}break;case'tag':{if(!_0x24f140)return _0x38b114[_0x4d6271(0xfb)](_0x4d6271(0xdb));if(!_0x546776)return;_0x2dfe0d[_0x4d6271(0x12b)](_0x38b114[_0x4d6271(0x105)],{'text':q?q:'','mentions':_0x226eb1[_0x4d6271(0x102)](_0x34047d=>_0x34047d['id'])},{'quoted':_0x38b114});}break;case _0x4d6271(0x108):if(!_0x24f140)return _0x38b114[_0x4d6271(0xfb)](_0x4d6271(0xdb));if(!_0x3a6f4f)return _0x38b114[_0x4d6271(0xfb)](_0x4d6271(0xab));if(!_0x546776)return _0x38b114[_0x4d6271(0xfb)](_0x4d6271(0xe0));var _0x3376ae=await _0x2dfe0d[_0x4d6271(0xb5)](_0x38b114[_0x4d6271(0x105)])[_0x4d6271(0x12c)](()=>_0x38b114[_0x4d6271(0xfb)](mess[_0x4d6271(0xef)]['api']));_0x3376ae=_0x4d6271(0xd4)+_0x3376ae,_0x38b114[_0x4d6271(0xfb)](_0x4d6271(0x107)),_0x2dfe0d['sendMessage'](_0x5653a0,{'text':_0x3376ae});break;case _0x4d6271(0xe6):if(!_0x24f140)return _0x38b114['reply'](_0x4d6271(0xdb));if(!_0x3a6f4f)return _0x38b114['reply']('Adminin\x20dlu\x20bjir');if(!_0x546776)return _0x38b114[_0x4d6271(0xfb)](_0x4d6271(0xe0));_0x2dfe0d[_0x4d6271(0xd7)](_0x38b114[_0x4d6271(0x105)],_0x4d6271(0xd0)),_0x38b114[_0x4d6271(0xfb)]('succes');break;case _0x4d6271(0xad):if(!_0x24f140)return _0x38b114['reply'](_0x4d6271(0xdb));if(!_0x3a6f4f)return _0x38b114[_0x4d6271(0xfb)](_0x4d6271(0xab));if(!_0x546776)return _0x38b114[_0x4d6271(0xfb)]('lu\x20siape?');_0x2dfe0d[_0x4d6271(0xd7)](_0x38b114['chat'],_0x4d6271(0xdc)),_0x38b114[_0x4d6271(0xfb)]('succes');break;default:}if(_0x3322fb[_0x4d6271(0xb1)]('>')){if(!_0x15ed4f)return _0x38b114['reply']('Maaf\x20Command\x20Tersebut\x20Khusus\x20Developer\x20Bot\x20WhatsApp');try{let _0x36decc=await eval(_0x3322fb['slice'](0x2));if(typeof _0x36decc!==_0x4d6271(0x129))_0x36decc=require('util')[_0x4d6271(0xe1)](_0x36decc);await _0x38b114['reply'](_0x36decc);}catch(_0x5c0bab){_0x38b114[_0x4d6271(0xfb)](String(_0x5c0bab));}}}catch(_0x392765){_0x38b114[_0x4d6271(0xfb)](util[_0x4d6271(0xa0)](_0x392765));}};function _0x60f0(){const _0x5bf3be=['getlinkgrup','Asia/Jakarta','messageContextInfo','./lib/color','sender','axios','mtype','profilePictureUrl','remoteJid','test','06:00:00','endsWith','1971770GWeijL','text?','Malam','match','templateButtonReplyMessage','Sore\x20☀️','then','conversation','Update\x20File\x20Terbaru\x20','long','Sore\x20🌄','Pagi🌔','pic','shift','length','videoMessage','filter','https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg','imageMessage','read','extendedTextMessage','string','jimp','sendMessage','catch','getBufferAsync','participant','10797152yrVRHP','listResponseMessage','toLocaleDateString','watchFile','Legi','includes','groupParticipantsUpdate','decodeJid','9OITgsJ','16260dCxmvw','Pagi\x20☀️','image','4RehaGA','Kliwon','format','No\x20Name','log','Pahing','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','Siang🌞','1\x20januari\x202021','text','@s.whatsapp.net','getWidth','Malam\x20🌚','Adminin\x20dlu\x20bjir','𝗕𝗼𝘁\x20𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣\x20𝗝𝗕||𝗙𝗲𝗿𝗱𝘆\x0a\x0a.pushkontak\x0a.tag\x0a.opengc\x0a.closegc\x0a.kick\x0a.getlinkgrup','open','fromMe','key','slice','startsWith','isGroup','selectedButtonId','resize','groupInviteCode','1099bORdCg','caption','participants','trim','Pagi\x20🌄','buttonsResponseMessage','succes\x20get\x20member','floor','join','rgb','104716XWgqBT','crypto','3655835MnzTlB','public','mentionedJid','./lib/functions','8492733VNqASC','11:00:00','selectedId','quoted','bold','DD/MM/YY','pushkontak','chalk','Pagi\x20🌔','15:00:00','announcement','\x1b[1;31m~\x1b[1;37m>\x20[\x1b[1;32mCMD\x1b[1;37m]','mimetype','from','https://chat.whatsapp.com/','numeric','owner','groupSettingUpdate','@g.us','documentMessage','stringify','digrup\x20bang','not_announcement','DONE','HH:mm:ss','pushName','lu\x20siape?','inspect','moment-timezone','user','@adiwajshing/baileys','remove','close','986652gvZUcs','human-readable','Pon','https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg','yellowBright','https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg','kick','selectedRowId','error','replace','message','Malam\x20🌙','Siang\x20🌞','MIME_JPEG','child_process','menu','resolve','.net','AUTO','unwatchFile','reply','cache','getHeight','./lib/exif','https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg','getTime','singleSelectReply','map','../config/settings','Tag\x20Orangnya','chat','getHours','succes\x20get\x20link'];_0x60f0=function(){return _0x5bf3be;};return _0x60f0();}let file=require[_0x51b927(0xf7)](__filename);fs[_0x51b927(0x132)](file,()=>{const _0x12c37e=_0x51b927;fs[_0x12c37e(0xfa)](file),console[_0x12c37e(0xa2)](chalk[_0x12c37e(0xeb)](_0x12c37e(0x11c)+__filename)),delete require[_0x12c37e(0xfc)][file],require(file);});