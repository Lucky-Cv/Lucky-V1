
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xeonkey = require('xfarr-api')
const cheerio = require ("cheerio")
const { XeonBotIncTiktok } = require('./lib/tiktokbyxeon')
let { msgFilter } = require('./lib/antispam')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const { XeonBotIncWiki } = require('./lib/xeonywiki.js')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const xeontod = require("tod-api")
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')
const { ind } = require('./language')
const _leveling = JSON.parse(fs.readFileSync('./storage/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./storage/user/level.json'))
const ntarabe = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const {
	getRegisteredRandomId,
	addRegisteredUser,    
	createSerial,
	checkRegisteredUser,
    bannadd,
    checkban
} = require('./lib/register.js')
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")
//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const Pez = ['????','????','????']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database omther\\
let xeonysticker = JSON.parse(fs.readFileSync('./Media/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./Media/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./Media/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./Media/theme/Media-Store-Karne-Ke-Liye/video.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = cnf = async (cnf, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplay.selectedRowId : (m.mtype == 'templateButtonreplayMessage') ? m.message.templateButtonreplayMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplay.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi.test(body) ? body.match(/^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await cnf.decodeJid(cnf.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        //group\\
       const groupMetadata = m.isGroup ? await cnf.groupMetadata(m.chat).catch(e => {}) : ''
       const groupName = m.isGroup ? groupMetadata.subject : ''
       const participants = m.isGroup ? await groupMetadata.participants : ''
       const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
       const groupOwner = m.isGroup ? groupMetadata.owner : ''
       const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
       const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
       const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
       const AntiLink = m.isGroup ? ntilink.includes(from) : false
       const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
       const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
       const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
       const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
       const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
       const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
       const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
       const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
       const antiWame = m.isGroup ? ntwame.includes(from) : false
       const antiToxic = m.isGroup ? nttoxic.includes(from) : false
       const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
       const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
       const AntiArabe = m.isGroup ? ntarabe.includes(from) : false
       const isAutoStick = _autostick.includes(from)
       const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
       const Autoreplay = m.isGroup ? autorep.includes(from) : true
       const isBan = banUser.includes(m.sender)
       const isBanChat = m.isGroup ? banchat.includes(from) : false
       autoreadsw = true
       const isLevelingOn = m.isGroup ? _leveling.includes(from) : false							    
       const isRegistered = checkRegisteredUser(m.sender)
           //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
			/*[-- funcion barra de nivel --]*/
			var per = '*[??????????????????????????????] 0%*'
			const peri = 50 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
			const perl = peri-getLevelingXp(m.sender) 
			const resl = Math.round(100-((perl/getLevelingXp(m.sender))*100))
			if (resl <= 10) {
				per = `*[??????????????????????????????] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[??????????????????????????????] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[??????????????????????????????] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[??????????????????????????????] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[??????????????????????????????] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[??????????????????????????????] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[??????????????????????????????] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[??????????????????????????????] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[??????????????????????????????] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[??????????????????????????????] ${resl}%*`
			} 
				
					
			
			/*[-- funcion ranking --]*/
			const levelRole = getLevelingLevel(m.sender)
   	       var role = 'Dicipulo'
        if (levelRole <= 2) {
            role = 'Dicipulo'
        } else if (levelRole <= 4) {
            role = 'Dicipulo Dia 1 ?????'
        } else if (levelRole <= 6) {
            role = 'Dicipulo Dia 2 ?????'
        } else if (levelRole <= 8) {
            role = 'Dicipulo Dia 3 ?????'
        } else if (levelRole <= 10) {
            role = 'Dicipulo Dia 4 ??????'
        } else if (levelRole <= 12) {
            role = 'Avanzado mes 1 ?????'
        } else if (levelRole <= 14) {
            role = 'Avanzado mes 2 ?????'
        } else if (levelRole <= 16) {
            role = 'Avanzado mes 3 ?????'
        } else if (levelRole <= 18) {
            role = 'Avanzado mes 4 ??????'
        } else if (levelRole <= 20) {
            role = 'Avanzado mes 5 ??????'
        } else if (levelRole <= 22) {
            role = 'Aventurero nv dia 1 ?????'
        } else if (levelRole <= 24) {
            role = 'Aventurero nv dia 2 ?????'
        } else if (levelRole <= 26) {
            role = 'Aventurero nv dia 3 ?????'
        } else if (levelRole <= 28) {
            role = 'Aventurero nv dia 4 ??????'
        } else if (levelRole <= 30) {
            role = 'Aventurero nv dia 5 ??????'
        } else if (levelRole <= 32) {
            role = 'Aventurero exp a??o 1 ?????'
        } else if (levelRole <= 34) {
            role = 'Aventurero exp a??o 2 ?????'
        } else if (levelRole <= 36) {
            role = 'Aventurero exp a??o 3 ?????'
        } else if (levelRole <= 38) {
            role = 'Aventurero exp a??o 4 ??????'
        } else if (levelRole <= 40) {
            role = 'Aventurero exp a??o 5 ??????'
        } else if (levelRole <= 42) {
            role = 'Aventurero prf a??o 1 ?????'
        } else if (levelRole <= 44) {
            role = 'Aventurero prf a??o 2 ?????'
        } else if (levelRole <= 46) {
            role = 'Aventurero prf a??o 3 ?????'
        } else if (levelRole <= 48) {
            role = 'Aventurero prf a??o 4 ??????'
        } else if (levelRole <= 50) {
            role = 'Aventurero prf a??o 5 ??????'
        } else if (levelRole <= 52) {
            role = 'Maestro mes 1 ?????'
        } else if (levelRole <= 54) {
            role = 'Maestro mes 2 ?????'
        } else if (levelRole <= 56) {
            role = 'Maestro mes 3 ?????'
        } else if (levelRole <= 58) {
            role = 'Maestro mes 4 ??????'
        } else if (levelRole <= 60) {
            role = 'Maestro mes 5 ??????'
        } else if (levelRole <= 62) {
            role = 'Elite mes 1 ????? '
        } else if (levelRole <= 64) {
            role = 'Elite mes 2 ?????'
        } else if (levelRole <= 66) {
            role = 'Elite mes 3 ?????'
        } else if (levelRole <= 68) {
            role = 'Elite mes 4 ??????'
        } else if (levelRole <= 70) {
            role = 'Elite mes 5 ??????'
        } else if (levelRole <= 72) {
            role = 'Elite a??o 1 ????????'
        } else if (levelRole <= 74) {
            role = 'Elite a??o 2 ????????'
        } else if (levelRole <= 76) {
            role = 'Elite a??o 3 ????????'
        } else if (levelRole <= 78) {
            role = 'Elite a??o 4 ?????????'
        } else if (levelRole <= 80) {
            role = 'Elite a??o 5 ?????????'
        } else if (levelRole <= 82) {
            role = 'Elite de la elite dia 1 ?????'
        } else if (levelRole <= 84) {
            role = 'Elite de la elite dia 2 ?????'
        } else if (levelRole <= 86) {
            role = 'Elite de la elite dia 3 ?????'
        } else if (levelRole <= 88) {
            role = 'Elite de la elite dia 4 ??????'
        } else if (levelRole <= 90) {
            role = 'Elite de la elite dia 5 ??????'
        } else if (levelRole <= 92) {
            role = 'Escolta dia 1 ????????'
        } else if (levelRole <= 94) {
            role = 'Escolta dia 2 ????????'
        } else if (levelRole <= 96) {
            role = 'Escolta dia 3 ????????'
        } else if (levelRole <= 98) {
            role = 'Escolta dia 4 ?????????'
        } else if (levelRole <= 100) {
            role = 'Escolta dia 5 ?????????'
        } else if (levelRole <= 102) {                   
            role = 'Leyenda I ???'
        } else if (levelRole <= 154) {
            role = 'Leyenda I ???'
        } else if (levelRole <= 156) {
            role = 'Leyenda I ???'
        } else if (levelRole <= 158) {
            role = 'Leyenda I ???'
        } else if (levelRole <= 160) {
            role = 'Leyenda I ???'
        } else if (levelRole <= 162) {
            role = 'Leyenda I ???'
        } else if (levelRole <= 164) {
            role = 'Leyenda I ???'
        } else if (levelRole <= 166) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 168) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 170) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 172) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 174) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 176) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 178) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 180) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 182) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 184) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 186) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 188) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 190) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 192) {
            role = 'Leyenda I ???'
        } else if (levelRole <= 194) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 196) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 198) {
            role = 'Leyenda II ???'
        } else if (levelRole <= 200) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 210) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 220) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 230) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 240) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 250) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 260) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 270) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 280) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 290) {
            role = 'Leyenda III ???'
        } else if (levelRole <= 300) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 310) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 320) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 330) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 340) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 350) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 360) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 370) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 380) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 390) {
            role = 'Leyenda IV ???'
        } else if (levelRole <= 400) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 410) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 420) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 430) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 440) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 450) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 460) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 470) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 480) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 490) {
            role = 'Leyenda V ???'
        } else if (levelRole <= 500) {
            role = 'Leyenda VI ???'
        } else if (levelRole <= 666) {
            role = 'Leyenda VII ???'
        } else if (levelRole <= 700) {
            role = 'Leyenda VIII ???'
        } else if (levelRole <= 800) {
            role = 'Leyenda IX ???'
        } else if (levelRole <= 900) {
            role = 'Leyenda X ???'
        } else if (levelRole <= 1000) {
            role = 'Mythic I ??????'
        } else if (levelRole <= 2000) {
            role = 'Mythic II ??????'
        } else if (levelRole <= 3000) {
            role = 'Mythic III ??????'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV ??????'
        } else if (levelRole <= 5000) {
            role = 'Mythic V ??????'
        } else if (levelRole <= 6000) {
            role = 'Mythical Glory ??????'
        } else if (levelRole <= 7000) {
            role = 'Mythical Glory x1000???'
        } else if (levelRole <= 8000) {
            role = 'Mythical Glory 1100 ??????'
        } else if (levelRole <= 9000) {
            role = 'Mythical Glory 2000 ??????'
        } else if (levelRole <= 10000) {
            role = 'Despertar ????????????'
	    } else if (levelRole <= 66666666) {
   	         role = 'Onichan???'
   	     }
   		 
				
				
         
	
	
	
	
	// FAKE TEXT IMG
const textImg = (teks) => {
cnf.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Media/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEreplay PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEreplay TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEreplay LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEreplay DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: log0
}
}
}
//FAKEreplay VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEreplay GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEreplay GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEreplay TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEreplay VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//group target \\
const reply = (teks) => {
           cnf.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdreplay": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/theme/bot.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            cnf.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdreplay": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/theme/bot.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!cnf.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> En'), chalk.green(m.isGroup ? pushname : 'Privado', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('*(o?????_???)???Limite Reiniciado*')
        }, {
            scheduled: true,
            timezone: "America/Santiago"
        })
        	        /*[-- funcion nivel --]*/
            if (m.isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(m.sender)
            const checkId = getLevelingId(m.sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 500 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(m.sender)
                addLevelingXp(m.sender, amountXp)
                if (requiredXp <= getLevelingXp(m.sender)) {
                    addLevelingLevel(m.sender, 1)                    
                    let monaynya = 20
                    addMonay(m.sender, monaynya)	           	                
                     replay(ind.levelup(pushname, m.sender, getLevelingXp,  getLevel, getLevelingLevel, role))            
	               
 
                  }
            } catch (err) {
                console.error(err)
            }
        }

        
        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/ConfuBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/ConfuBot${moment.tz('America/Santiago').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await cnf.setStatus(`(o?????_???)???{cnf.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	//antispam or auto react
//if (m.message && msgFilter.isFiltered(from)) {
//console.log(`>[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
//return cnf.sendMessage(from, { react: { text: `>`, key: m.key }})
//}
	
//auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		cnf.chatRead(from)
	}
	}
//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await cnf.sendPresenceUpdate('composing', m.chat)
cnf.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
  if (global.autoReadGc) {
  if (m.isGroup) { cnf.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
  //auto recording all
    if (global.autoRecord) { if (m.chat) { cnf.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { cnf.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { cnf.sendPresenceUpdate('available', m.chat) }
  }

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await cnf.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`*(o?????_???)???Auto Sticker*`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await cnf.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await cnf.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`*(o?????_???)???Auto Sticker*`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await cnf.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

	// AntiLinkgc
if (AntiLink) {
linkgce = await cnf.groupInviteCode(from)
if (budy.includes(`http${linkgce}`)) {
} else if (isUrl(m.text)) {
if (isAdmins) return
if (m.key.fromMe) return 
if (isCreator) return 
kice = m.sender
await cnf.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => replay(jsonformat(res)))
cnf.sendMessage(from, {text:`\`\`\`??? ANTILINK ???\`\`\`\n\n@${kice.split("@")[0]} Ha sido expulsado por enviar un enlace en este grupo`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//anti travas
  if (antiVirtex) {
  if (budy.length > 4500) {
  replay(`*Alguien env??o travas. Marcar chat como le??do [??????]*\n`.repeat(50))
  replay(`\`\`\`??? ANTI-TRAVA ???\`\`\`\n\nLo siento, ser??s expulsado por kuaker????`)
  if (!isBotAdmins) return replay(mess.botAdmin)
  cnf.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }

//antilink YT
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
if (isAdmins) return 
if (m.key.fromMe) return 
if (isCreator) return
kice = m.sender
await cnf.groupParticipantsUpdate(m.chat, [kice], 'remove')
cnf.sendMessage(from, {text:`\`\`\`??? ANTI-YT ???\`\`\`\n\n@${kice.split("@")[0]} Ser??s expulsado por enviar un enlace de YouTube en este grupo????`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//anti canal de yt
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
if (isAdmins) return 
if (m.key.fromMe) return 
if (isCreator) return 
kice = m.sender
await cnf.groupParticipantsUpdate(m.chat, [kice], 'remove')
cnf.sendMessage(from, {text:`\`\`\`??? ANTI-CNYT ???\`\`\`\n\n@${kice.split("@")[0]} Seras expulsado por enviar un enlace de un canal de YouTube en este grupo????`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
if (isAdmins) return 
if (m.key.fromMe) return 
if (isCreator) return 
kice = m.sender
await cnf.groupParticipantsUpdate(m.chat, [kice], 'remove')
cnf.sendMessage(from, {text:`\`\`\`??? ANTI-IG ???\`\`\`\n\n@${kice.split("@")[0]} Seras eliminado por enviar link de ig en este grupo ????`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink fb
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
if (isAdmins) return 
if (m.key.fromMe) return
if (isCreator) return 
kice = m.sender
await cnf.groupParticipantsUpdate(m.chat, [kice], 'remove')
cnf.sendMessage(from, {text:`\`\`\`??? ANTI-FB ???\`\`\`\n\n@${kice.split("@")[0]} Seras expulsado por enviar un enlace de Facebook en este grupo :v`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
if (isAdmins) return 
if (m.key.fromMe) return 
if (isCreator) return 
kice = m.sender
await cnf.groupParticipantsUpdate(m.chat, [kice], 'remove')
cnf.sendMessage(from, {text:`\`\`\`??? ANTI-TG ???\`\`\`\n\n@${kice.split("@")[0]} Vas a ser expulsado por enviar un enlace de Telegram en este grupo????`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
if (isAdmins) return 
if (m.key.fromMe) return 
if (isCreator) return 
kice = m.sender
await cnf.groupParticipantsUpdate(m.chat, [kice], 'remove')
cnf.sendMessage(from, {text:`\`\`\`??? ANTI-TKTK ???\`\`\`\n\n@${kice.split("@")[0]} Seras expulsado por enviar un enlace tiktok en este grupo,????`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
if (isAdmins) return 
if (m.key.fromMe) return 
if (isCreator) return 
kice = m.sender
await cnf.groupParticipantsUpdate(m.chat, [kice], 'remove')
cnf.sendMessage(from, {text:`\`\`\`??? ANTI-TW ???\`\`\`\n\n*[???] @${kice.split("@")[0]} Sera expulsado por enviar un enlace de Twitter en este grupo [???]*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all
if (AntiLinkAll)
   if (budy.includes(".com")){
if (!isBotAdmins) return
if (isAdmins) return 
if (m.key.fromMe) return
if (isCreator) return 
kice = m.sender
await cnf.groupParticipantsUpdate(m.chat, [kice], 'remove')
cnf.sendMessage(from, {text:`\`\`\`??? ANTI-ALL ???\`\`\`\n\n*[???] @${kice.split("@")[0]} Sera expulsado por enviar un enlace en este grupo [???]*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

/*                //auto replay
  //if (Autoreplay) //remove forwad slashes to make it autoreplay on off
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
					cnf.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreplay) //remove forwad slashes to make it autoreplay on off
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./Media/audio/${anju}.mp3`)
					cnf.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  //if (Autoreplay) //remove forwad slashes to make it autoreplay on off
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/image/${anjh}.jpg`)
					cnf.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  //if (Autoreplay) //remove forwad slashes to make it autoreplay on off
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/video/${anjh}.mp4`)
					cnf.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }*/

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Aqu?? tienes :3",footerText: `${botname}`,buttons: buttons,headerType: 4}
cnf.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
replay("Error del emoji, ingresa otro emoji\nNOTA: Solo ingresa 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: cnf.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, cnf.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        cnf.ev.emit('messages.upsert', msg)
        }
	    
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //replay(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|rechazar|no|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    replay({
	    '-3': 'El juego ha terminado',
	    '-2': 'Invalido',
	    '-1': 'Posicion invalida',
	    0: 'Posicion Invalida',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '???',
	    O: '???',
	    1: '1??????',
	    2: '2??????',
	    3: '3??????',
	    4: '4??????',
	    5: '5??????',
	    6: '6??????',
	    7: '7??????',
	    8: '8??????',
	    9: '9??????',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Gano!` : isTie ? `Game Over` : `Tu Turno ${['???', '???'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
???: @${room.game.playerX.split('@')[0]}
???: @${room.game.playerO.split('@')[0]}

Escribir *rechazar* para rendirse y admitir la derrota`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await cnf.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await cnf.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(ac(epto)?|accept|yes|okay?|ok|no|rechazar|n|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|rechazar|n|nop|n)/i.test(m.text)) {
	    cnf.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Rechaz??, Juego cancelado`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    cnf.sendText(m.chat, `El juego ha sido enviado al chat privado 

@${roof.p.split`@`[0]} y 
@${roof.p2.split`@`[0]}

Elija en el chat respectivo"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) cnf.sendText(roof.p, `Por favor selecci??na \n\Roca????\nPapel????\nTijeras??????`, m)
	    if (!roof.pilih2) cnf.sendText(roof.p2, `Por favor selecciona \n\nRoca????\nPapel????\nTijeras??????`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) cnf.sendText(m.chat, `Ambos jugadores no quieren participar\nJuego cancelado`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    cnf.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} No eligio nada, se acab?? el juego ????`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /tijeras/i
	    let b = /roca/i
	    let k = /papel/i
	    let reg = /^(tijeras|roca|papel)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replay(`Has elegido ${m.text} ${!roof.pilih2 ? `\n\nEsperando a que tu oponente elija ????` : ''}`)
	    if (!roof.pilih2) cnf.sendText(roof.p2, '*_[???] El oponente ha elegido\nAhora es tu turno [???]_*', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replay(`Has elegido ${m.text} ${!roof.pilih ? `\n\nEsperando a que tu oponente elija ????` : ''}`)
	    if (!roof.pilih) cnf.sendText(roof.p, '*_[???] El oponente ha elegido\nAhora es tu turno [???]_*', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    cnf.sendText(roof.asal, `_*???? Resultados ????*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Gano \n` : ` Perdi?? \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Gan?? \n` : ` Perdi?? \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replay(`
*[???] No lo etiquetes [???]*
??l est?? AFK/Offline ${reason ? 'Por ' + reason : 'Sin raz??n alguna'}
Tiempo ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replay(`
Volviste a estar en l??nea desde AFK${user.afkReason ? ' despu??s ' + user.afkReason : ''}
En ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
                const timestampe = speed();
const latensie = speed() - timestampe
                const menulist = `?????????
?????? Hola! ???? ???
????????? ??? ${pushname} ???
????????? Soy Lucky V1
????????????????????????????????????????????? ???
???
????????? ???????????? ???????????????? ???       
??????????????????????? : ${latensie.toFixed(4)} miliseconds
??????????????????????????????? : ${runtime(process.uptime())}
??????????????? ???????????????? : ${global.botname}
??????????????????????? ???????????????? : ${global.ownername}
??????????????????????? ????????. : ${global.owner}
??????????????????? ???????????????? : ${os.hostname()}
??????????????????????????????????? : ${os.platform()}
??????????????????????? ???????????????? : ${Object.keys(global.db.data.users).length}
??????????????????????? ???????????? : ${jumlahcmd}
??????????????????????? ???????????? ???????????????????? : ${jumlahharian}
????????????????????????????????????????????? ???
   ??????  Por favor seleccione
   ??????  El bot??n de abajo
   ????????????????????????????????????????????? ???`
   
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)



switch(command) {

case 'britanic-api':
                anu = await fetchJson(`https://britanic-apis.herokuapp.com/estado`)
               replay(`*| API REST BRITANIC |*
_Estado:_ ${anu.estado}
_RAM:_ ${anu.memoria}
_Puerto:_ ${anu.puerto}
_Runtime:_ ${anu.activo}
_Ping:_ ${anu.velocidad}
_Owner:_ ${anu.contacto.owner}
_Link:_ https://britanic-apis.herokuapp.com

*| API REST OFICIAL DE LUCKY |*`)
			break			
			
case 'besar':
            if (!m.mentionedJid[0]) return replay(`*[??????] A quien deseas besar?*\n\nEjemplo : ${prefix}besar @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
besomp = ['bes1','bes2','bes3','bes4','bes5','bes6','bes7']
 var besito = besomp[Math.floor(Math.random() * besomp.length)]  
 reacbeso = fs.readFileSync(`./Media/reac/beso/${besito}.mp4`) 
 let captionb = `@${m.sender.split`@`[0]} esta besando a @${m.mentionedJid[0].split`@`[0]}`
await cnf.sendMessage(m.chat, { video: reacbeso, caption: `${captionb}`, gifPlayback: true }, { mentions: parseMention(captionb), quoted: m })
	break	
/*			            case 'ping': case 'p': case 'botstatus': case 'statusbot': 
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `//*???? Info Internet*
//> Velocidad de respuesta ${latensi.toFixed(3)} _segundos_\n\nRuntime : ${runtime(process.uptime())}
//===========================||
//*???? Info Ram*
//> RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
//===========================||
//*???? NodeJS Memoria Usada*
//> ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
//===========================||
//*??????? Info CPU*
//> ${cpus[0] ? `_Total CPU Usado_
//> ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
                `.trim()
                
                
//                replay(`${respon}`)
            
            break
            case 'speedtest': {
            	   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
            replay('Testeando velocidad...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) replay(stdout)
        if (stderr.trim()) replay(stderr)
            }
            } 
            break
            case 'owner': case 'creator': {
                cnf.sendContact(m.chat, global.vcardowner, m)
            }
            break
  case 'setmenu': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
            if (!isCreator) return replay(mess.owner)
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = false
                replay(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                replay(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateDocument = false
                replay(mess.success)
                //} else if (args[0] === 'templateMessage'){
                /////setbot.templateImage = false
                /////setbot.templateVideo = false
                /////setbot.templateGif = false
                /////setbot.templateMsg = true
                //////setbot.templateDocument = false
                //////replay(mess.success)
                } else if (args[0] === 'templateDocument'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = true
                replay(mess.success)
                } else {
                let sections = [
                {
                title: "*[??????] CAMBIO DE MENU*",
                rows: [
                {title: "Imagen Menu", rowId: `setmenu templateImage`, description: `Toque para cambiar el men?? del bot a Men?? de imagen`},
                {title: "Gif Menu", rowId: `setmenu templateGif`, description: `Toca para cambiar el men?? del bot a Men?? GIF`},
                {title: "Video Menu", rowId: `setmenu templateVideo`, description: `Toque para cambiar el men?? del bot a Men?? de video`},
                ///////////////{title: "Text Menu", rowId: `setmenu templateMessage`, description: `Toca para cambiar el men?? del bot a Men?? de texto`},
                {title: "Documento Menu", rowId: `setmenu templateDocument`, description: `Toque para cambiar el men?? del bot a Men?? de documento`}
                ]
                },
                ]
                cnf.sendListMsg(m.chat, `*Seleccione el men?? que desea cambiar*`, ` `, cnf.user.name, `Haga clic aqu??`, sections, m)
                }
            }
            break
case 'sugerir': case 'solicitar': case 'request': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay(`Ejemplo : ${prefix + command} hola confu, agregue el comando de stickers`)
teks = `*| SOLICITUD |*`
teks1 = `\n\nNumero : @${m.sender.split("@")[0]}\nSolicitud : ${args.join(" ")}`
teks2 = `\n\nEnviado correctamente al propietario`
for (let i of owner) {
cnf.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
cnf.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
                    case 'bug': case 'report': {
                    	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                    	if(!text) return replay(`Reportar error\n\nEjemplo: ${command} Error en el men??`)
                    	cnf.sendMessage(`${owner}@s.whatsapp.net`, {text: `*Informe de error de:* wa.me/${m.sender.split("@")[0]}
Mensaje de informe: ${text}` })
replay(`Reportado con ??xito al propietario\n\nAseg??rese de que el error sea v??lido, si juega con esto, use esta funci??n una y otra vez sin motivo, ser?? bloqueado.`)
                    }
                    break
case 'donar': case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
teks = `*??? Script ???*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nNo olvides donar ????`
replay(teks)
break*/
					
 case 'banchat': {
 if (isBan) return replay(mess.ban)	 			
if (!isCreator) return replay(mess.owner)
if (args[0] === "on") {
if (isBanChat) return replay('*[??????] Este chat ya se encuentra baneado*')
banchat.push(from)
replay('*[??????] Baneo exitoso del chat*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*??? ?????? ADVERTENCIA ?????? ???*\n\n_El bot ha sido deshabilitado en este grupo, ahora nadie podr?? usar el bot en este grupo._`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('*[??????] Este chat no se encuentra baneado*')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('*[??????] Desbaneo exitoso del chat*')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntnsfw, `Por favor, haga clic en el bot??n de abajo\n\nBan para Banear el chat\nUnban para desbanear el chat`, `${global.botname}`, m)
  }
  }
  break

case 'ban': {
	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args[0]) return replay(`*[??????] Seleccione add o del(add para banear, del para desbanear), Por ejemplo: *${prefix}ban add* @ al usuario que quieres banear*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('*[??????] El usuario ya fue baneado*')
banUser.push(orgnye)
replay(`*[??????] Usuario baneado con ??xito*`)
} else if (args[0] === "del") {
if (!isBane) return ads('*[??????] El usuario ya fue desbaneado*')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`*[??????] Desbanee con ??xito al usuario*`)
} else {
replay("*[??????] Error*")
}
}
break
	
       case 'inventario': 
       case 'inventori': 
       case 'inventory': 
       case 'profile':
        	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (q.includes('--help')) return replay(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var imgane = await getBuffer(picak+`*Inventario*`)
     let teksehmazeh = `_[ ??????????????? INFORMACI??N ??????????????? ]_

??????Tu Sangre* : ${getDarah(m.sender)}
*?????????Tu Hierro* : ${getBesi(m.sender)}
*????Tu Oro* : ${getEmas(m.sender)}
*????Tu Esmeralda* : ${getEmerald(m.sender)}
*??????Tu Limit* : ${getLimit(m.sender)}
*????Tu Poci??n* : ${getPotion(m.sender)}


_[ ????RESULTADO DE CAZA???? ]_


*????Pez* : ${getIkan(m.sender)}
*????Gallina* : ${getAyam(m.sender)}
*????Conejo* : ${getKelinci(m.sender)}
*????Oveja* : ${getDomba(m.sender)}
*????Vaca* : ${getSapi(m.sender)}
*????Elefante* : ${getGajah(m.sender)}

_*${pushname}*_`
/*     await cnf.send5ButImg(from, `` + '' + teksehmazeh, `?? ${botname}`, imgane, [{"urlButton": {"displayText": "YouTube????","url": `${websitex}`}}])  
*/
await cnf.send5ButImg(from, `${teksehmazeh}` + '' + ' ', `?? ${botname}`,imgane, [{"urlButton": {"displayText": "YouTube????","url": `${websitex}`}}])  
  break
        case 'userlimit': 
        if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
{      
   let txt = `??? *USUARIOS LIMITADOS* ???\n\n`
     for (let i of _limit){
     txt += `??? *ID :* @${i.id.split("@")[0]}\n??? *Limit* : ${i.limit}\n`
     }
    replay(txt)       
  }
 break
 case 'leaderboard': case 'lb':
 if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
{      
   let txt = `??? *CLASIFICACI??N* ???\n\n`
     for (let i of _buruan){
     txt += `??? *ID :* ${i.id}\n`
     txt += `*????Pez* : ${i.Ikan}\n`
     txt += `*????Gallina* : ${i.ayam}\n`
     txt += `*????Conejo* : ${i.kelinci}\n`
     txt += `*????Oveja* : ${i.domba}\n`
     txt += `*????Vaca* : ${i.sapi}\n`
     txt += `*????Elefante* : ${i.gajah}\n\n`
     }
    replay(txt)       
  }
 break
case 'mining': case 'mine':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (q.includes('--help')) return replay(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return replay(`Est??s Cansad@!!!!, Intenta Curarte Usando Pociones`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `*[????] RESULTADO*\n*Hierro* : ${besinya}\n*Oro* : ${emasnya}\n*Esmeralda* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Minar??????'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     cnf.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  replay(`@${m.sender.split("@")[0]} Comenzando a Minar????`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'comprar': case 'beli': case 'buy':{
 	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (q.includes('--help')) return replay(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return replay(`Qu?? quieres comprar?\n\n1.pocion\n2.baitfood\n3.limit\n\nEjemplo: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'pocion'){
  let noh = 100000 * anu
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} pocion 2\n 1 Pocion = 100,000 Monedas `)
 if (isMonay < noh) return replay(`*[????] Su dinero no es suficiente para realizar esta compra*\n_Tu dinero Actual es de ${getMonay(m.sender)}_`)
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Tu poci??n* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} baitfood 2\n 1 Bait Food = 2,500 Monedas`)
 if (isMonay < noh) return replay(`*[????] Su dinero no es suficiente para realizar esta compra*\n_Tu dinero Actual es de ${getMonay(m.sender)}_`)
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Tu Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} limit 2\n 1 Limit = 35,000 Monedas`)
 if (isMonay < noh) return replay(`*[????] Su dinero no es suficiente para realizar esta compra*\n_Tu dinero Actual es de ${getMonay(m.sender)}_`)
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Tu Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { replay("*[??????] Error*") }
 }
 break

 case 'vender': case 'sell': case 'sel': case 'jual':{
 	 if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
 if (!q) return  replay(`Que quieres vender??\nEjemplo : ${prefix + command} pez 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'pez'){
 if (isIkan < anu) return replay(`*[????] No tienes suficientes peces para esta transacci??n*`)
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} pez 2\n 1 pez = 1,500 Monedas`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Sus peces restantes* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'pollo'){
 if (isAyam < anu) return replay(`*[????] No tienes suficientes pollos para esta transacci??n*`)
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} pollo 2\n 1 Pollo = 2,500 Monedas`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Sus pollos restante* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'conejo'){
 if (isKelinci < anu) return replay(`*[????] No tienes suficientes conejos para esta transacci??n*`)
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} conejo 2\n 1 Conejo = 3,000 Monedas`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Sus Conejos restantes* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'oveja'){
 if (isDomba < anu) return replay(`*[????] No tiene suficientes ovejas para esta transacci??n*`)
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} oveja 2\n 1 Oveja = 5,000 monedas`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Sus ovejas restantes* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'vaca'){
 if (isSapi < anu) return replay(`*[????] No tiene suficientes vaca(s) para esta transacci??n*`)
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} vaca 2\n 1 Vaca = 10,000 Monedas`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Tu(s) vaca(s) restante(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elefante'){
 if (isGajah < anu) return replay(`*[????] No tienes suficientes elefantes para esta transacci??n*`)
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} elefante 2\n 1 elefante = 15,000 Monedas`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Su(s) elefante(s) restante(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'hierro'){
 if (isBesi < anu) return replay(`*[??????] No tiene suficiente hierro para esta transacci??n*`)
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} hierro 2\n 1 Hierro = 15,000 Monedas`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replay(`Transacci??n realizada ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Su hierro restante(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'oro'){
 if (isEmas < anu) return replay(`*[??????] No tiene suficiente oro para esta transacci??n*`)
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} oro 2\n 1 Oro = 50,000 Monedas`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*Su oro restante* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'esmeralda'){
 if (isEmerald < anu) return replay(`*[??????] No tienes suficientes esmeraldas para esta transacci??n*`)
 if (!args[1]) return replay(`Ejemplo : ${prefix + command} esmeralda 2\n 1 Esmeralda = 100,000 Monedas`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replay(`Transacci??n exitosa ??????\n*Su dinero restante* : ${getMonay(m.sender)}\n*[??????] No tienes suficientes esmeraldas para esta transacci??n* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { replay("*[??????] Error*") }

 }
 break

 case 'sanar': case 'heal':{
 	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (q.includes('--help')) return replay(examkosong) 
 if (!isCekDarah < 1) return replay('*[????] Solo puedes sanar cuando tu sangre es 0*')
 if (isCekDarah > 100) return replay('*[????] Tu salud esta al 100%*')
 if (isPotion < 1) return replay(`*[????] No tienes una poci??n, intenta comprarla de esta manera #buy pocion*`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 replay('????xito! tu salud est?? llena')
 }
 break
 case 'cazar': case 'hunt': case 'hunting': {
 	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (q.includes('--help')) return replay(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return replay('*[????] Tu vida ah bajado mucho, trata de curarte usando pociones*') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["fuiste atravesado por una espina mientras cazabas","Te deslizaste por el abismo mientras cazabas","Fuiste ara??ado por un animal salvaje","No fuiste cuidadoso","Te enredaste en ra??ces","Caiste mientras cazabas"]
  let location = ["Jungla","selva amaz??nica","Bosque tropical","Prado","Bosque africano","Monta??as"]
   var Ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungla') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Selva amaz??nica') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Bosque tropical') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Prado') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Bosque africano') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Monta??as') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*????Pez* : ${Ikanmu}\n`
     teksehmazeh += `*????Pollo* : ${ayam}\n`
     teksehmazeh += `*????Conejo* : ${kelinci}\n`
     teksehmazeh += `*????Oveja* : ${domba}\n`
     teksehmazeh += `*????Vaca* : ${sapi}\n`
     teksehmazeh += `*????Elefante* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Localizaci??n* : ${lokasinya}\n`
     teksehmazeh += `*Herido* : ${lukanya}, vida - 10\n`
     teksehmazeh += `*Vida restante* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Cazar de nuevo ????'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     cnf.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  replay(`@${m.sender.split("@")[0]} Comenz?? a cazar en ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, Ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
cnf.groupRevokeInvite(m.chat)
}
break
	    case 'afk': {
		if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replay(`${m.pushName} esta afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`*[????] Todav??a est??s en juego*`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            replay('Jugador encontrado!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '???',
            O: '???',
            1: '1??????',
            2: '2??????',
            3: '3??????',
            4: '4??????',
            5: '5??????',
            6: '6??????',
            7: '7??????',
            8: '8??????',
            9: '9??????',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Esperando @${room.game.currentTurn.split('@')[0]}

Escribe *rechazar* para rendirse y admitir la derrota`
            if (room.x !== room.o) await cnf.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await cnf.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            replay('*[????] Esperando oponente*' + (text ? `*[????] Escriba el comando a continuaci??n* ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            cnf.sendText(m.chat, `*[????] Elimin?? con ??xito la sesi??n de TicTacToe*`, m)
            } else if (!this.game) {
            replay(`*[????] No hay sesion de juego iniciada*`)
            } else replay('?')
            } catch (e) {
            replay('*[??????] Error')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`*[????] Completa tu partida actual*`)
	    if (m.mentionedJid[0] === m.sender) return replay(`*[????] No puedo jugar conmigo mismo*`)
            if (!m.mentionedJid[0]) return replay(`_??A qui??n quieres desafiar??_\nEtiqueta a la Persona..\n\nEjemplo : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  replay(`*[????] La persona a la que est??s desafiando est?? jugando con alguien m??s asi como tu ex :(*`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} desaf??o a @${m.mentionedJid[0].split`@`[0]} para Jugar

@${m.mentionedJid[0].split`@`[0]} Escribe Ok/No`
            this.suit[id] = {
            chat: await cnf.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) cnf.sendText(m.chat, `*[????] Tiempo de espera agotado*`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archivar\n4. desarchivar\n5. leer\n6. noleer\n7. borrar`)
                if (args[0] === 'mute') {
                    cnf.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => replay(jsonformat(res)))
                } else if (args[0] === 'unmute') {
                    cnf.chatModify({ mute: null }, m.chat, []).then((res) => replay(jsonformat(res)))
                } else if (args[0] === 'archivar') {
                    cnf.chatModify({  archive: true }, m.chat, []).then((res) => replay(jsonformat(res)))
                } else if (args[0] === 'desarchivar') {
                    cnf.chatModify({ archive: false }, m.chat, []).then((res) => replay(jsonformat(res)))
                } else if (args[0] === 'leer') {
                    cnf.chatModify({ markRead: true }, m.chat, []).then((res) => replay(jsonformat(res)))
                } else if (args[0] === 'noleer') {
                    cnf.chatModify({ markRead: false }, m.chat, []).then((res) => replay(jsonformat(res)))
                } else if (args[0] === 'borrar') {
                    cnf.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => replay(jsonformat(res)))
                }
            }
            break

	case 'reaccion': case 'reaccionar': case 'reac': case 'react': { 
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
cnf.sendMessage(m.chat, reactionMessage)} 
break
		
		
             case 'math': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`*[????] Ya hay una sesi??n iniciada*`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Modo: ${Object.keys(modes).join(' | ')}\nEjemplo: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                cnf.sendText(m.chat, `*??Cu??l es el resultado de: ${result.soal.toLowerCase()}*?\n\nTiempo: ${(result.waktu / 1000).toFixed(2)} segundos`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Respuesta: " + result.jawaban)
                    replay("Tiempo agotado\nRespuesta: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
           case 'soulmate': case 'mysoulmate': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `????Tu Alma gemela es

@${me.split('@')[0]} ?????? @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '??????', buttonText: { displayText: '??????' }, type: 1 }
                    ]
                    await cnf.sendButtonText(m.chat, buttons, jawab, cnf.user.name, m, {mentions: ments})
            }
            break
           case 'pareja': case 'couple': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ?????? @${jodoh.split('@')[0]}
Que esta pasando??????????????`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '??????', buttonText: { displayText: '??????' }, type: 1 }
                    ]
                    await cnf.sendButtonText(m.chat, buttons, jawab, cnf.user.name, m, {mentions: menst})
            }
            break
            case 'is': case 'pregunta':
            if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
				if (!text) return replay(`Ejemplo : ${prefix + command} Confu est?? casado?`)
					const apa = [`Si`, `No`, `Quiz??s`, `Definitivamente`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
cnf.sendMessage(from, { text: `${kah}` }, { quoted: m })

					break

  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
                                  	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
				if (!text) return replay(`Ejemplo : ${prefix + command} @`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
cnf.sendMessage(from, { text: `*${command}*\n\nNombre : ${q}\nRespuesta : *${sange}%*` }, { quoted: m })
					break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'idiota':
      case 'mongol':
      case 'chupapinga':
      case 'trans':
      case 'down':
      case 'pajero':
      case 'pajera':
      case 'puta':
      case 'puto':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
      	            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `La persona mas *${command}* de aqui es @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '????', buttonText: { displayText: '????????' }, type: 1 }
                    ]
                    await cnf.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'checkdeath':
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
             if (!text) return replay(`Usar el nombre de alguien, ejemplo : ${prefix + command} Bruno Sobrino????`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              replay(`Nombre : ${predea.data.name}\n*Morira a la edad :* ${predea.data.age} a??os :0`)
              break  
            case 'join': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`*[??????] Ingrese al enlace del grupo!*`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`*[??????] Link invalido*`)
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await cnf.groupAcceptInvite(result).then((res) => replay(jsonformat(res)))
            }
            break
                              case 'salbot': case 'leavegc': case 'leavegroup': {
if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
	replay(mess.wait)
                if (!isCreator) return replay(`${mess.owner}`)
                await cnf.groupLeave(m.chat).then((res) => replay(jsonformat(res)))
            }
            break
            case 'setexif': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Ejemplo : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replay(`Exif se ha cambiado con ??xito a\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replay(jsonformat(res)))
	}
	break
	case 'add': {
		if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(jsonformat(res)))
	}
	break
	case 'promote': {
		if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res)))
	}
	break
	case 'demote': {
		if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(jsonformat(res)))
	}
	break
        case 'block': {
        	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.updateBlockStatus(users, 'block').then((res) => replay(jsonformat(res)))
	}
	break
        case 'unblock': {
        	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.updateBlockStatus(users, 'unblock').then((res) => replay(jsonformat(res)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
		if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`*[??????] Introduzca un texto*`)
                await cnf.groupUpdateSubject(m.chat, text).then((res) => replay(mess.success))
            }
            break
          case 'setdesc': case 'setdescription': {
          	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`*[??????] Introduzca un texto*`)
                await cnf.groupUpdateDescription(m.chat, text).then((res) => replay(mess.success))
            }
            break
          case 'setbotpp': {
          	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                await cnf.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                replay(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
           	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                await cnf.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                replay(mess.success)
                }
                break
            case 'tagall': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `????????????????? Tag All ????????????????? 

 ??? *Mensaje : ${q ? q : 'Confu Nos domina'}*\n\n`
                for (let mem of participants) {
                teks += `?????? @${mem.id.split('@')[0]} ??????\n`
                }
                cnf.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
                	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            cnf.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
		if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return replay(mess.endLimit) 
		db.data.users[m.sender].limit -= 1 
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`*[??????] Introduzca el texto*`)
                let anu = await styletext(text)
                let teks = `*Texto ingresado:* ${text}\n\n`
                for (let i of anu) {
                    teks += `?????? *${i.name}* : ${i.result} ??????\n\n`
                }
                replay(teks)
	    }
	    break
               case 'vote': {
               	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`*[??????] Todav??a hay votos en este chat!*\n\n*${prefix}delvote* - Para terminar una votaci??n`)
            if (!text) return replay(`Ingrese el motivo del voto, ejemplo: *${prefix + command} Confu es Pro?*`)
            replay(`Comienza la votaci??n!\n\n*${prefix}upvote* - Para votar a favor\n*${prefix}devote* - Para votar en contra\n*${prefix}checkvote* - Para verificar el voto\n*${prefix}delvote* - Para terminar la votaci??n`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*??? VOTO ???*

*Razon:* ${vote[m.chat][0]}

?????? A FAVOR ???
??? 
?????? Total: ${vote[m.chat][1].length}
???
??? 
???????????????

?????? ENCONTRA ???
??? 
?????? Total: ${vote[m.chat][2].length}
???
??? 
???????????????

*${prefix}delvote* - Para finalizar la votaci??n`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: cnf.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            cnf.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
               	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`*[??????] No hay votaci??n en este grupo!*\n\n*${prefix}vote* - Para iniciar una votaci??n`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`*[??????] Ya as votado*`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*??? VOTO ???*

*Razon:* ${vote[m.chat][0]}

?????? A FAVOR ???
??? 
?????? Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `?????? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

?????? EN CONTRA ???
??? 
?????? Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `?????? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

*${prefix}delvote* - Para finalizar`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: cnf.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            cnf.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
                	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`*[??????] No hay votaci??n en este grupo!*\n\n*${prefix}vote* - Para iniciar una votaci??n`)
           isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
             if (wasVote) replay(`*[??????] Ya as votado*`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*??? VOTO ???*

*Razon:* ${vote[m.chat][0]}

?????? A FAVOR ???
??? 
?????? Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `?????? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

?????? EN CONTRA ???
??? 
?????? Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `?????? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

*${prefix}delvote* - Para finalizar`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: cnf.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            cnf.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`*[??????] No hay votaci??n en este grupo!*\n\n*${prefix}vote* - Para iniciar una votaci??n`)
teks_vote = `*??? VOTO ???*

*Razon:* ${vote[m.chat][0]}

?????? A FAVOR ???
??? 
?????? Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `?????? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

?????? EN CONTRA ???
??? 
?????? Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `?????? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

*${prefix}delvote* - Para finalizar 


??${cnf.user.id}
`
cnf.sendTextWithMentions(m.chat, teks_vote, m)
break


			                case 'leveling':
            if (!m.isGroup) return replay(`${mess.group}`)
             if (!isAdmins) return replay(`${mess.admin}`)
                if (args.length < 1) return replay('activar oh desactivar')
                if (args[0] === 'activar') {
                if (isLevelingOn) return replay('*la funci??n de nivel ha estado activa antes*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./storage/group/leveling.json', JSON.stringify(_leveling))
                  	   replay(ind.lvlon())
              	  } else if (args[0] === 'desactivar') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./storage/group/leveling.json', JSON.stringify(_leveling))
                 	    replay(ind.lvloff())
             	   } else {
                 	   replay(ind.satukos())
                	}
          break 
				case 'level':
				if (isBan) return  replay(mess.ban)
                if (!isRegistered) return replay(ind.noregis())
                if (!isLevelingOn) return replay(ind.lvlnoon())
            if (!m.isGroup) return replay(`${mess.group}`)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return replay(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `???????????? *LEVEL* ?????????\n?????? *Nombre* : ${pushname}\n?????? Numero : wa.me/${m.sender}\n?????? User XP :  ${userXp}/${requiredXp}\n?????? User Level : ${userLevel}\n???????????????????????????????????????`
                replay(resul)
          break 



		case 'deletevote': case'delvote': case 'hapusvote': {
			if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`*[??????] No hay votaci??n en este grupo!*\n\n*${prefix}vote* - Para iniciar una votaci??n`)
            delete vote[m.chat]
            replay('*[??????] Se elimin?? con ??xito la votaci??n en este grupo*')
	    }
            break
              case 'grupo': case 'group': case 'grup': {
               	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await cnf.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`*[??????] Cierre exitoso del grupo*`))
                } else if (args[0] === 'open'){
                    await cnf.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`*[??????] Apertura exitosa del grupo*`))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await cnf.sendButtonText(m.chat, buttons, `Modo`, cnf.user.name, m)

             }
            }
            break
            case 'editinfo': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await cnf.groupSettingUpdate(m.chat, 'unlocked').then((res) => replay(`*[??????] La informaci??n del grupo es de edici??n abierta con ??xito*`))
             } else if (args[0] === 'close'){
                await cnf.groupSettingUpdate(m.chat, 'locked').then((res) => replay(`*[??????] Cerrado con ??xito editar informaci??n del grupo*`))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await cnf.sendButtonText(m.chat, buttons, `Modo de infogc`, cnf.user.name, m)

            }
            }
            break
case 'autosticker':
            case 'autostiker':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args.length < 1) return replay('*[??????] Escribir (#autosticker on) para habilitar*\n_Escribir autosticker off para deshabilitar_')
if (args[0]  === 'on'){
if (isAutoSticker) return replay(`*[??????] Ya activado*`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replay('*[??????] Autosticker activado')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replay('*[??????] Autosticker desactivado*')
}
break
case 'autostickerpc':
case 'autostickerpv':
            case 'autostikerpc':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (args.length < 1) return replay('*[??????] Escribe autostickerpv on para activar*\n_Escribe autosticker off para apagar_')
if (args[0]  === 'on'){
if (isAutoStick) return replay(`*[??????] Ya activado*`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
replay('*[??????] Autostickerpv activado*')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
replay('*[??????] Autostickerpv desactivado')
}
break
case 'antilink': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLink) return replay('*[??????] Ya activado*')
ntilink.push(from)
replay('*[??????] ??xito al activar el antilink gc en este grupo')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Si no es administrador, no env??e el enlace de grupo o ser?? expulsado de inmediato.*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return replay('*[??????] Ya desactivado*')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
replay('*[??????] ??xito al desactivar el antilinkgc en este grupo*')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntilink, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break
  case 'antilinkyt': case 'antilinkyoutubevid': case 'antilinkytvid': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replay('*[??????] Ya activado*')
ntilinkytvid.push(from)
replay('*[??????] ??xito al activar el antilink para videos de YouTube en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Si no es administrador, no env??e el enlaces de video de YouTube en este grupo o ser?? expulsado de inmediato.*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replay('*[??????] Ya desactivado*')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
replay('*[??????] ??xito al desactivar el antilink para videos de YouTube en este grupo*')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntilink, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replay('*[??????] Ya activado*')
ntilinkytch.push(from)
replay('*[??????] ??xito al activar el antienlace para canales de YouTube en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Si no eres administrador, no env??es el enlace de un canal de YouTube en este grupo o ser??s expulsado de inmediato.*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replay('*[??????] Ya desactivado*')
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
replay('*[??????] ??xito al desactivar el antilink para canales de YouTube en este grupo*')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntilink, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replay('*[??????] Ya activo*')
ntilinkig.push(from)
replay('*[??????] ??xito al activar el antilink de ig en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Si no eres administrador, no env??es el enlace de Instagram en este grupo o ser??s expulsado de inmediato*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replay('*[??????] Ya desactivado*')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('*[??????] ??xito al desactivar el antilink de Ig en este grupo*')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntilink, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replay('*[??????] Ya activado*')
ntilinkfb.push(from)
replay('*[??????] ??xito al activar el antilinks de Facebook en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Si no eres administrador, no env??es el enlace de Facebook en este grupo o ser??s expulsado de inmediato.*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replay('*[??????] Ya desactivado*')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
replay('*[??????] ??xito al desactivar el antienlace de Facebook en este grupo*')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replay('*[??????] Ya activado*')
ntilinktg.push(from)
replay('*[??????] ??xito al activar el antilinks de telegram en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Si no eres administrador, no env??es el enlace de Telegram en este grupo o ser??s expulsado de inmediato*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replay('*[??????] Ya desactivado*')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('*[??????] ??xito al desactivar el antilinks de telegram en este grupo*')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntilink, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replay('*[??????] Ya activo*')
ntilinktt.push(from)
replay('*[??????] ??xito al activar el antilinks de tiktok en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Si no eres administrador, no env??es el enlace de tiktok en este grupo o ser??s expulsado de inmediato*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replay('*[??????] Ya desactivado*')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
replay('*[??????] ??xito al desactivar el antilinks de tiktok en este grupo*')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('*[??????] Ya activado*')
ntilinktwt.push(from)
replay('*[??????] ??xito al activar el antilinks de Twitter en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Si no eres administrador, no env??es el enlaces de Twitter en este grupo o ser??s expulsado de inmediato*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replay('*[??????] Ya desactivado*')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
replay('*[??????] ??xito al desactivar el antilink de Twitter en este grupo*')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntilink, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('*[??????] Ya activado*')
ntilinkall.push(from)
replay('*[??????] ??xito al activar todos los antilinks en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Si no eres administrador, no env??es ning??n enlace en este grupo o ser??s expulsado de inmediato*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replay('*[??????] Ya desactivado*')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
replay('*[??????] ??xito al desactivar todos los antilinks en este grupo*')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntilink, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break
case 'antikuaker': case 'antivirus': case 'antivirtex': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replay('*[??????] Ya activado*')
ntvirtex.push(from)
replay('*[??????] ??xito al activar el antivirus en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] Ninguna persona puede enviar virus en este grupo, el que env??e ser?? expulsado inmediatamente*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay('*[??????] Ya desactivado*')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay('*[??????] ??xito al desactivar el antivirus de este grupo*')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntvirtex, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break
  case 'nsfw': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replay('*[??????] Ya activado*')
ntnsfw.push(from)
replay('*[??????] ??xito al activar el nsfw en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] La funci??n Nsfw se ha habilitado en este grupo, lo que significa que se puede acceder en este grupo a contenido sexual que el bot proporcionara*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replay('*[??????] Ya desactivado*')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
replay('*[??????] ??xito al desactivar nsfw en este grupo*')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntnsfw, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break

  case 'antiarabe': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiArabe) return replay('*[??????] Ya activado*')
ntarabe.push(from)
fs.writeFileSync('./database/ntarabe.json', JSON.stringify(ntarabe))
replay('*[??????] ??xito al activar el AntiArabe en este grupo*')
var groupe = await cnf.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
cnf.sendMessage(from, {text: `*[??????] La funci??n AntiArabe se ha habilitado en este grupo, lo que significa que los n??meros de los siguientes paises seran eliminados del grupo.\n\nCodigos de Pa??s: '258', '92', '91', '357', '359', '91', '234', '212', '213', '233', '258', '297', '350', '371', '380', '972'*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiArabe) return replay('*[??????] Ya desactivado*')
let off = ntarabe.indexOf(from)
ntarabe.splice(off, 1)
fs.writeFileSync('./database/ntarabe.json', JSON.stringify(ntarabe))
replay('*[??????] ??xito al desactivar el AntiArabe en este grupo*')
} else {
  let buttonsntarabe = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await cnf.sendButtonText(m.chat, buttonsntarabe, `Por favor, haga clic en el bot??n de abajo\n\nOn para activar\nOff para desactivar`, `${global.botname}`, m)
  }
  }
  break
             case 'mute': {
             	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return replay(`*[??????] Ya activo*`)
                db.data.chats[m.chat].mute = true
                replay(`*[??????] ${cnf.user.name} ha sido muteado en este grupo*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return replay(`*[??????] Ya desactivado*`)
                db.data.chats[m.chat].mute = false
                replay(`*[??????] ${cnf.user.name} ha sido desmuteado en este grupo*`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await cnf.sendButtonText(m.chat, buttons, `Mute Bot`, cnf.user.name, m)
                }
             }
             break
case 'setppbot': case 'setbotpp': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!quoted) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
if (/webp/.test(mime)) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
let media = await cnf.downloadAndSaveMediaMessage(quoted)
await cnf.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.success)
}
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await cnf.groupInviteCode(m.chat)
                cnf.sendText(m.chat, `*https://chat.whatsapp.com/${response}*\n\nLink de : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`*[??????] On para activar / Off para desactivar*`)
                if (args[0] === 'on') {
                    await cnf.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replay(jsonformat(res)))
                } else if (args[0] === 'off') {
                    await cnf.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replay(jsonformat(res)))
                }
            }
            break
case 'grupsetting':
case 'ajustesgp':
            case 'groupsetting':{
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                    let sections = []
                    let com = [`group open`,`autosticker on`,`welcome on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`group open`]
                    let comm = [`group close`,`autosticker off`,`welcome off`,`antilinkgc off`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`group close`]
                    let listnya = [`Abrir/Cerrar`,`Auto-Sticker on/off`,`Welcome on/off`,`AntilinkGc on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Canal on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`,`Anti Toxicos on/off`,`Anti Virus on/off`,`Grupo open/close`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Auto Sticker`,`Welcome`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Anti Toxic`,`Anti Virus`,`Grupo`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Activar ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Deactivar ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  cnf.sendMessage(
      from, 
      {
       text: "Ajustes para el Grupo",
       footer: botname,
       title: "Establezca la configuraci??n de su grupo aqu??......",
       buttonText: "Click",
       sections
      }, { quoted : m }
    )  
}
  break

            case 'delete': case 'del': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!m.quoted) replay(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`*[??????] El mensaje no fue enviado por mi*`)
                cnf.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
      case 'bcgc': case 'bcgroup': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`*[??????] Ejemplo : ${prefix + command} ${global.ownername}`)
let getGroups = await cnf.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replay(`Enviar transmisi??n a ${anu.length} Grupos, Tiempo  ${anu.length * 1.5} segundos`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube ????',
url: `${global.websitex}`
}
}, {
urlButton: {
displayText: 'Script ????',
url: `${global.botscript}`
}
}, {
quickreplayButton: {
displayText: 'Bot Estado ????',
id: 'ping'
}
}, {
quickreplayButton: {
displayText: 'Menu ????',
id: 'menu'
}  
}, {
quickreplayButton: {
displayText: 'Owner ????',
id: 'owner'
}
}]
let txt = `*??? ${global.ownername} Transmisi??n???*\n\n${text}`
cnf.send5ButImg(i, txt, `${global.botname}`, log0, btn, thum)
}
replay(`*[??????] Difusi??n enviada con ??xito a ${anu.length} Grupos*`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`*[??????] Ejemplo : ${prefix + command} ${global.ownername}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Enviar difusi??n a ${anu.length} Chats\nTiempo ${anu.length * 1.5} segundos`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube ????',
url: `${global.websitex}`
}
}, {
urlButton: {
displayText: 'Script ????',
url: `${global.botscript}`
}
}, {
quickreplayButton: {
displayText: 'Bot Estado ????',
id: 'ping'
}
}, {
quickreplayButton: {
displayText: 'Menu ????',
id: 'menu'
}  
}, {
quickreplayButton: {
displayText: 'Owner ????',
id: 'owner'
}
}]
let txt = `*??? ${global.ownername} Transmisi??n ???*\n\n${text}`
cnf.send5ButImg(yoi, txt, `${global.botname}`, log0, btn, thum)
}
replay('*[??????] ??xito en la transmisi??n*')
}
break
 case 'bcimage': case 'bcvideo': case 'bcaudio': {
                  if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return replay(`*Enviar/responder video/audio/imagen que deseas transmitir con* ${prefix + command}`)
                let anu = await store.chats.all().map(v => v.id)
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999,status: 200, thumbnail: fs.readFileSync('./Media/theme/bot.jpg'), surface: 200, message: `${ownername} Transmisi??n`, orderTitle: `${botname}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                replay(`*Enviar transmisi??n a* ${anu.length} *Grupos y Chats, Tiempo ${anu.length * 1.5} segundos*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                displayText: 'YouTube ????',
url: `${global.websitex}`
                                }
                            }, {
urlButton: {
displayText: 'Script ????',
url: `${global.botscript}`
}
}, {
quickreplayButton: {
displayText: 'Bot Estado ????',
id: 'ping'
}
}, {
quickreplayButton: {
displayText: 'Menu ????',
id: 'menu'
}  
}, {
quickreplayButton: {
displayText: 'Owner ????',
id: 'owner'
}
}]
                    let media = await cnf.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    cnf.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                    let BtConfu = `*??? ${global.ownername} Transmisi??n???*${text ? '\n\n' + text : ''}`
                    cnf.send5ButImg(i, BtConfu, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let BtConfu = `*??? ${global.ownername} Transmisi??n???*${text ? '\n\n' + text : ''}`
                    cnf.sendMessage(i, {video: buffer, caption: `${BtConfu}`}, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                    cnf.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
                    } else {
                    replay(`*Enviar/responder video/audio/imagen que deseas transmitir con* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                replay(` *Envie la difusi??n a* ${anu.length} *Chats*`)
            }
            break
case 'bcloc': {
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!text) return replay(`Use ${prefix}bcloc texto\n\nEjemplo : ${prefix + command} Confu Pro`)
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                replay(`*Envie la difusi??n a* ${anu.length} Chats\nTiempo ${anu.length * 1.5} segundos`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
            cnf.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+`${ownername} Transmisi??n`) }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
		}		
            }
            break
case 'chatinfo': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.quoted) replay('*[??????] Etiqueta un mensaje*')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replay('*[??????] Ese mensaje no fue enviado por mi*')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `> @${i.userJid.split('@')[0]}\n`
teks += ` ??????> *Tiempo :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} > *Estado :* ${read ? 'Leido' : 'Enviado'}\n\n`
}
cnf.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.quoted) return replay('*[??????] Etiqueta un mensaje*')
let wokwol = await cnf.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return replay('*[??????] El mensaje al que respondi?? no contiene una respuesta*')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     ??? Chats ???\n\nExisten ${anu.length} usuarios que usan el bot en chat personal`
for (let i of anu) {
 teks += `\n\nPerfil : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\n??ltimo chat : ${moment(i.conversationTimestamp * 1000).tz("America/Santiago").format("DD/MM/YYYY HH:mm:ss")}`
}
cnf.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     ??? Grupos ???\n\nExisten ${anu.length} usuarios que usan el bot en Grupos`
for (let i of anu) {
 let metadata = await cnf.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nNombre : ${metadata.subject ? metadata.subject : "Indefinido"}\nCreador : ${loldd ? '@' + loldd.split("@")[0] : "Indefinido"}\nID : ${metadata.id ? metadata.id : "Indefinido"}\nCreado : ${metadata.creation ? moment(metadata.creation * 1000).tz('America/Santiago').format('DD/MM/YYYY HH:mm:ss') : "Indefinido"}\nMiembros : ${metadata.participants.length ? metadata.participants.length : "Indefinido"}`
}
cnf.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'listaktif': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
cnf.sendText(m.chat, '     ??? Online ???\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break

       case 'attp2': {
		   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
           if (!text) return replay(`Ejemplo : ${prefix + command} ConfuSex`)
           await cnf.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'ConfuBot-MD', 'By ConfuMods', m, {asSticker: true})

         }
         break

case 'attp': {
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
           if (!text) return replay(`Ejemplo : ${prefix + command} ConfuSex`)
//           await cnf.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, '
let teks = encodeURI(text)
await cnf.sendMedia(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${teks}`, 'Confu', 'Mods', m, {asSticker: true}).catch((err) => replay('Error'))
    
         }
         break

case 'ttp': {
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
           if (!text) return replay(`Ejemplo : ${prefix + command} ConfuSex`)
           await cnf.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
            case 'soundcloud': case 'scdl': {               
                if (!text) return replay(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) return replay(`*[??????] No es un enlace de SoundCloud*`)
                xeonkey.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*????SOUNDCLOUD????*\n\n`
                    txt += `*Titulo :* ${data.title}\n`
                    txt += `*Calidad :* ${data.medias[0].quality}\n`
                    txt += `*Extension :* ${data.medias[0].extension}\n`
                    txt += `*Peso :* ${data.medias[0].formattedSize}\n`
                    txt += `*Link :* ${data.url}`                  
                buf = await getBuffer(data.thumbnail)   
                cnf.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => replay('Error'))    
                cnf.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
                }).catch((err) => {
                    replay('Error')
                })
            }
            break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
	                	            	            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await cnf.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
	            	            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await cnf.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
	                	            	            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await cnf.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await cnf.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replay('M??ximo 10 segundos!')
let media = await quoted.download()
let encmedia = await cnf.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replay(`Envia una imagen/video con ${prefix + command}\nSi es un video la duraci??n debe ser 1-9 Segundos`)
}
}
break
case 'swm': case 'take': case 'stickerwm': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay(`Ejemplo:\n${prefix + command} ConfuMods|Stickers de Amor`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
cnf.downloadAndSaveMediaMessage(quoted, "gifee")
cnf.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await cnf.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replay('Maximo 10 segundos')
let media = await quoted.download()
let encmedia = await cnf.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
replay(`Envia una imagen/video con ${prefix + command}\nSi es video la duration debe ser 1-9 Segundos`)
}
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return replay(`Envia/responde a una foto con ${prefix + command} *BTS*`)
if (text.includes('|')) return replay(`Envia/responde a una foto con ${prefix + command} *Is Gay*`)
if (!/image/.test(mime)) return replay(`Envia/responde a una foto con ${prefix + command} *Funao*`)
replay(mess.wait)
mee = await cnf.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await cnf.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            if (!m.quoted.text && !text) return replay(`Etiqueta un mensaje con ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            replay(eb)
        }
        break
            case 'dbinary': {
            	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            if (!m.quoted.text && !text) return replay(`Etiqueta un mensaje con ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            replay(db)
        }
        break
case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallpubg': case 'wallml': 	
try{
	   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
cnf.sendMessage(from, {image : nyz3, caption:`By ${global.botname}`}, {quoted:m}) 						
} catch (e) {
error("Error!")
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return replay(mess.nsfw)
try{
replay(mess.wait)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
cnf.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Error")}	
break
   case 'spank':
      if (isBan) return replay(mess.ban)	 			
   if (isBanChat) return replay(mess.banChat)
   if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return replay(mess.nsfw)
replay(mess.wait)
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await cnf.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return replay('Error!')
                                    })
break
case 'blowjobgif': case 'bj' :
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return replay(mess.nsfw)
replay(mess.wait)
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await cnf.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return replay('error..')
                                    })
break
case 'hentaivid': case 'hentaivideo': {
	                        	            	   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
	if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return replay(mess.nsfw)
                replay(mess.wait)
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                cnf.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `> Titulo : ${result912.title}\n> Categor??a : ${result912.category}\n> Extenci??n : ${result912.type}\n> Vistas : ${result912.views_count}\n> Compartido : ${result912.share_count}\n> Fuente : ${result912.link}\n> Link : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return replay(mess.nsfw)
replay(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ??????`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Listo??????`,
  buttons: trapbot,
  headerType: 1
  }     
            await cnf.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return replay(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ??????`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Listo??????`,
  buttons: hnekobot,
  headerType: 1
  }      
            await cnf.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'nwaifu' :
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return replay(mess.nsfw)
replay(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ??????`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Listo??????`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await cnf.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gasm':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
	if (!AntiNsfw) return replay(mess.nsfw)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'smug2':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'foxgirl':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animenom' :
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.isGroup) return replay(mess.group)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next ??????`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Listo??????`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await cnf.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'waifu3':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'neko2':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `.neko`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await cnf.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break
case 'animecuddle':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animeslap':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepat':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehug':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekiss':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewlp':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animespank':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecry':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekill':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animelick':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebite':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeyeet':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebully':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebonk':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewink':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepoke':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmile':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewave':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeawoo':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeblush':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmug':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeglomp':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehappy':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animedance':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecringe':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehighfive':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehandhold':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animemegumin':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'shinobu2':  
 if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: `Next ??????`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await cnf.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break
case 'megumin2':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: `Next ??????`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Listo??????`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await cnf.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     
case 'awoo2':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `Next ??????`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Listo??????`,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await cnf.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewall2': case 'animewallpaper2':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replay('Que fondo de pantalla quieres?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: `Next ??????`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Busqueda :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
            await cnf.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
//cnf.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*B??squeda :* ${q}`})            
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						cnf.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'waifu': case 'loli':
					   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
					replay(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					cnf.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'naruto':
			if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
				replay(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `naruto`, buttonText: { displayText: "Next ??????" }, type: 1 }]
				cnf.sendMessage(from, { caption: `Listo??????`, image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
 			    break
case 'yaoi':
			if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
				replay(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next ??????" }, type: 1 }]
				cnf.sendMessage(from, { caption: "Listo??????", image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
 			    break
case 'coffee': case 'kopi': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next ??????'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `Listo??????`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'zippyshare': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!text) return replay(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return replay(`*[??????] No es un enlace ZippyShare*`)
anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
m.replay(`*${util.format(anu)}*`)
linkyke = await getBuffer(anu.result.dlink)
cnf.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}`}, {quoted:m})     
}
break
case 'savefrom': {
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
  if (!text) return m.replay(`Ejemplo : ${prefix + command} link`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return replay(`*[??????] Link no valido*`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [
	    {
	     title: `Calidad ${i.subname}`, 
	     rowId: `${prefix}get ${text}`,
      description: `${data.hosting}`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  cnf.sendMessage(
      m.chat, 
      {
       text: `${data.meta.title} *Aqu?? est?? la lista de videos, haga clic en el bot??n de abajo para elegir*`,
       footer: `${botname}`,
       title: "*SAVE FROM*",
       buttonText: "CLICK????",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    replay('Error')
                })
            }
            break
case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
	            if (!/image/.test(mime)) return replay(`*Envia/Responde a una imagen con* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await cnf.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                cnf.sendMessage(m.chat, { image: buf, caption: `*${prefix + command}*` }, { quoted: m})
                }
                break
case 'gayeffect': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
	            if (!/image/.test(mime)) return replay(`*Envia/Responde a una imagen con* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await cnf.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
                cnf.sendMessage(m.chat, { image: buf, caption: `*${prefix + command}*` }, { quoted: m})
                }
                break
case 'deleteeffect': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
	            if (!/image/.test(mime)) return replay(`*Envia/Responde a una imagen con* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await cnf.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/delete?url=${anu}`)
                cnf.sendMessage(m.chat, { image: buf, caption: `*{prefix + command}*` }, { quoted: m})
                }
                break
case 'framed': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
	            if (!/image/.test(mime)) return replay(`*Envia/Responde a una imagen con* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await cnf.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/fotojatoh?url=${anu}`)
                cnf.sendMessage(m.chat, { image: buf, caption: `*{prefix + command}*` }, { quoted: m})
                }
                break
case 'beautifuleffect': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
	            if (!/image/.test(mime)) return replay(`*Envia/Responde a una imagen con* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await cnf.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/beautiful?url=${anu}`)
                cnf.sendMessage(m.chat, { image: buf, caption: `*{prefix + command}*` }, { quoted: m})
                }
                break
            case 'readmore': {
            if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Ejemplo : ${prefix + command} Holi putoelquelolea.li`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               replay(`${anu.result}`)
            }
            break
case 'toviewonce': case 'toonce': { 
	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
        if (!quoted) return replay(`Etiqueta una im??gen`)
        if (/image/.test(mime)) {
anu = await cnf.downloadAndSaveMediaMessage(quoted)
cnf.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await cnf.downloadAndSaveMediaMessage(quoted)
        cnf.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break
        case 'tinyurl': {
        	 if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
            replay(mess.wait)
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              replay(`${anu.data} Listo??????`)
              } catch (e) {
              emror = String(e)
              replay(`${e}`)
            }
        }
        break
case 'fliptext': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (args.length < 1) return replay(`Ejemplo:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`\`\`\`??? FLIP TEXT ???\`\`\`\n*???> Normal :*\n${quere}\n*???> Flip :*\n${flipe}`)
}
break
case 'toletter': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!Number(args[0])) return replay(`Ejemplo:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replay(`\`\`\`??? ALFABETO ???\`\`\`\n*???> Numero :*\n${quere}\n*???> Alfabeto :*\n${convertes}`)
} catch {
replay(`Error!`)
}
}
break
case 'traducir': case 'trd': case 'translate': case 'trans': {
if (isBan) return replay(mess.ban)
if (!args.join(" ")) return replay("*[??????] Donde esta el texto?*")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=es&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
replay(`???? Traducci??n : ${args.join(" ")}\n???? Resultado : ${Infoo}`)
}
break
case'glitch3':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} Confu v5|WhatsApp Bot`)
replay(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'waterdrop':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
    .catch((err) => console.log(err));
     break


case 'lion2':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
  if(!q) return replay(`Use ${prefix + command} ConfuBot`)
  replay(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
     .catch((err) => console.log(err));
     break


case 'papercut':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
      if(!q) return replay(`Use ${prefix + command} ConfuMods`)
      replay(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case 'transformer':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
      if(!q) return replay(`Use ${prefix + command} ConfuMods`)
      replay(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
.catch((err) => console.log(err));
break
   

case 'harrypot':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
       if(!q) return replay(`Use ${prefix + command} Confu v5|WhatsApp Bot`)
       replay(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 break


case 'neondevil':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
      if(!q) return replay(`Use ${prefix + command} ConfuBot`)
      replay(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case '3dstone':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case '3davengers':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'thunder':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   

case 'window':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   case 'blackpinkneon':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
      if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} Confu v5|WhatsApp Bot`)
replay(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'pornhub2':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'blackpink2':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch2':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} Confu v5|WhatsApp Bot`)
replay(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch3':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} Confu v5|WhatsApp Bot`)
replay(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dspace':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} Confu v5|WhatsApp Bot`)
replay(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'lion':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} Confu v5|WhatsApp Bot`)
replay(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dneon':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'neon':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'greenneon':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   
  
case 'bokeh':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'wolf':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break




case 'joker':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'dropwater2':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Use ${prefix + command} ConfuBot`)
replay(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => cnf.sendMessage(m.chat, { image: { url: data }, caption: `*${prefix + command}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
 
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) return replay(`Ejemplo : ${prefix + command} ConfuMods`) 
                if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
             replay(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                cnf.sendMessage(m.chat, { image: { url: anu }, caption: `*${prefix + command}*` }, { quoted: m })
             }
             break

case 'textmaker': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (args.length < 1) return replay(`Ejemplo :\n${prefix + command} ConfuBot`)
if (args[0] === 'glitch') {
if (args.length < 2) return replay(`Ejemplo :\n${prefix + command + ' ' + args[0]} ConfuBot`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
cnf.sendMessage(from, {image:{url:teds}, caption:"Listo??????"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return replay(`Ejemplo :\n${prefix + command + ' ' + args[0]} $ConfuBot`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
cnf.sendMessage(from, {image:{url:teds}, caption:"Listo??????"}, {quoted:m})
} else {
replay(`*Text Maker List :*\n???> glitch\n???> glow`)
}
}
break
//logo maker
case 'hoorror':{
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
  case 'whitebear':{
  	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'thunder2':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'blackpink':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'neon':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'matrix2':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'sky':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break

case 'magma':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'sand':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'pencil':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'graffiti':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'metallic':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'steel':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'harrypotter':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'underwater':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'luxury':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'glue2':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'fabric':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'neonlight':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'lava':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'toxic':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'ancient':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'christmas2':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'sci_fi':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'rainbow':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'classic':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'watercolor2':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'halloween2':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'halloweenfire':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'writing':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'foggy':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'marvel':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'skeleton2':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'sketch':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'wonderful':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'cool':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'collwall':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'multicolor2':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'batman':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'juice':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
    cnf.sendMessage(from, {image:{url:anui}, caption:"Listo??????"}, {quoted:m})
}
   break
case 'pornhub':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Ejemplo: ${prefix + command} Confu | Mods`)
replay(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
cnf.sendMessage(from,{image:{url:anu}, caption:"Listo??????"},{quoted:m})
}
break
case 'retro':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Ejemplo: ${prefix + command} Confu | Mods`)
replay(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
cnf.sendMessage(from,{image:{url:anu}, caption:"Listo??????"},{quoted:m})
}
break
case 'horror':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Ejemplo: ${prefix + command} Confu | Mods`)
replay(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
cnf.sendMessage(from,{image:{url:anu}, caption:"Listo??????"},{quoted:m})
}
break
case '8bit':{
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay(`Ejemplo: ${prefix + command} Confu | Mods`)
replay(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
cnf.sendMessage(from,{image:{url:anu}, caption:"Listo??????"},{quoted:m})
}
break
case 'emoji': {
	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay('Donde esta el emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await cnf.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `*${prefix + command}*`}, {quoted:m})
})
}
break

case 'igemoji': 
case 'instagramemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay("Error usar m??ximo un emoji, ejemplo:" + ` ${prefix + command} ????`)
replay(mess.wait)
emote(q, "10")
break

case 'emojimix': {
	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) replay(`*Ejemplo :* ${prefix + command} ????+????`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await cnf.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
	case 'toimage': case 'toimg': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.quoted) return replay('Etiqueta un sticker')
if (!/webp/.test(mime)) return replay(`Etiqueta un sticker con: *${prefix + command}*`)
replay(mess.wait)
let media = await cnf.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
cnf.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.quoted) return replay('Etiqueta un sticker')
if (!/webp/.test(mime)) return replay(`Etiqueta un sticker con *${prefix + command}*`)
replay(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await cnf.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await cnf.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Listo??????' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Envia/Etiqueta el Video/Audio que quiere usar como audio con ${prefix + command}`)
if (!m.quoted) return replay(`Envia/Etiqueta el Video/Audio que quiere usar como audio con ${prefix + command}`)
replay(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
cnf.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (/document/.test(mime)) return replay(`Envia/Etiqueta un Video/Audio que quieres convertir a mp3 con ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Envia/Etiqueta un Video/Audio que quieres convertir a mp3 con ${prefix + command}`)
if (!m.quoted) return replay(`Envia/Etiqueta un Video/Audio que quieres convertir a mp3 con ${prefix + command}`)
replay(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
cnf.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `By ConfuBot (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Etiqueta un Video/Audio que quieres convertir a VN con ${prefix + command}`)
if (!m.quoted) return replay(`Etiqueta un Video/Audio que quieres convertir a VN con ${prefix + command}`)
replay(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
cnf.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!m.quoted) return replay('Etiqueta un sticker')
if (!/webp/.test(mime)) return replay(`Etiqueta un sticker con *${prefix + command}*`)
replay(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await cnf.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await cnf.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Listo??????' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
	case 'tourl': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
replay(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await cnf.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
replay(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
replay(util.format(anu))
}
await fs.unlinkSync(media)
}
break
            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Enviar/Responder a una imagen con ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await cnf.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replay(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    cnf.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'yts': case 'ytsearch': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay(`Ejemplo : ${prefix + command} ConfuBot`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Resultados de '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `> N??mero : ${no++}\n> Tipo : ${i.type}\n> ID : ${i.videoId}\n> Titulo : ${i.title}\n> Vistas : ${i.views}\n> Duraci??n : ${i.timestamp}\n> Publicado : ${i.ago}\n> Author : ${i.author.name}\n> Url : ${i.url}\n\n???????????????????????????????????????????????????\n\n`
}
cnf.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args[0]) return replay(`Ejemplo: ${prefix + command} <busqueda>\nUso : ${prefix + command} ConfuMods YouTube`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search : ${text}\n\n`
for (let g of res) {
teks += `>*Titulo* : ${g.title}\n`
teks += `> *Descripci??n* : ${g.snippet}\n`
teks += `> *Link* : ${g.link}\n\n????????????????????????????????????????????????????????????????????????\n\n`
} 
replay(teks)
})
}
break
case 'gimage': case 'googleimage': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args[0]) return replay("Que foto estas buscando??")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next ??????'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGEN |*

> Busqueda : ${text}
> Url : ${images}`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdreplay:{
title:`${global.ownername}`,
body:`${global.watermark}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `{global.websitex}`
}}
}
cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
	case 'igstoryxx': case 'instagramstoryxx': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args[0]) return replay(`Ejemplo :\n${prefix + command} confumods`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n> Username : ${resed.user.username ? resed.user.name : "Indefinido"}\n> Seguidores : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Seleccione a continuaci??n para descargar_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
cnf.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
replay(String(err))
}
}
break
case 'igs2': case 'igstory2': case 'instagramstory2': {
if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Cual es el username?\nEjemplo: ${prefix}igstory confumods`)
                let urlnya = text
	            hx.igstory(urlnya)
	            .then(async(result) => {
		        var halo = 0		
	            cnf.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----??? INSTAGRAM STORY ???----*\n\n*> Username :* ${result.user.username}\n*> Fullname :* ${result.user.fullName}\n*> Seguidores :* ${result.user.followers}\n*> Siguiendo :* ${result.user.following}\n*> ID :* ${result.user.id}\n*> Tipo de archivo :* ${result.medias[0].fileType}\n*> Tipo :* ${result.medias[0].type}\n*> Media :* ${result.medias.length}\n*> Bio :* ${result.user.biography}` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                cnf.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Historia ${i.type}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  cnf.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Historia ${i.type}*` }, { quoted: m })                  
                }
            }
            })
            }	
			break
case 'ig2': case 'igdl2': case 'instagram2': {
               if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Donde esta el link???`)
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return replay(`*[??????] Link no valido*`)             
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {	  
	            var halo = 0		
	            cnf.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----??? INSTAGRAM DOWNLOADER ???----*\n\n*> Username :* ${result.user.username}\n*> Fullname :* ${result.user.fullName}\n*> Seguidores :* ${result.user.followers}\n*> Siguiendo :* ${result.user.following}\n*> ID :* ${result.user.id}\n*> Tipo de Archivo :* ${result.medias[0].fileType}\n*> Tipo :* ${result.medias[0].type}\n*> Media :* ${result.medias.length}\n*> Url :* ${text}` }, { quoted: m })	                                  	 	            
		        for(let i of result.medias) {		
		        if(i.url.includes('mp4')){		           			    				
				let link = await getBuffer(i.url)
                cnf.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
                } else {
                let link = await getBuffer(i.url)
                cnf.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })                      
               }
              }
            })
            }		
			break
case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args[0]) return replay(`Ejemplo :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n> Username : ${resed.user.username ? resed.user.name : "Indefinido"}\n> Seguidores : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Seleccione a continuaci??n para descargar_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
cnf.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
replay(String(err))
}
}
break
case 'ig': {
	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (args[0] === "mp4") {
cnf.sendMessage(from, {video:{url:args[1]}, caption:'Listo??????', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
cnf.sendMessage(from, {image:{url:args[1]}, caption:'Listo??????'}, {quoted:m})
} else {
replay("Error! ")
}
}
break
case 'mp4' : {
	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args[0]) return replay(`Donde esta el link?`)
try {
cnf.sendMessage(from, {video:{url:args[0]}, caption:"Listo??????", contextInfo:{externalAdreplay:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
replay("Error!")
}
}
break
case 'jpeg': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args[0]) return replay(`Donde esta el link?`)
try {
cnf.sendMessage(from, {image:{url:args[0]}, caption:"Listo??????", contextInfo:{externalAdreplay:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
replay("Error")
}
}
break
case 'igtv': {	            
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Donde esta el link?`)
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return replay('*Link no valido*')
                instagramdlv3(`${text}`).then(async (data) => {            
                var buf = await getBuffer(data[0].thumbnail)        
                cnf.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `*${prefix + command}*`}, { quoted: m })
                }).catch((err) => {
                    replay('Error')
                })
            }
            break
            case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)	             
             if (!text) return replay(`Donde est?? el link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replay(`*Link no valido*`)
                xeonkey.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `*TWITTER DOWNLOADER*\n\n`
                    txt += `*> TITULO :* ${data.title}\n`
                    txt += `*> CALIDAD :* ${data.medias[1].quality}\n`
                    txt += `*> TIPO :* ${data.medias[1].extension}\n`
                    txt += `*> PESO :* ${data.medias[1].formattedSize}\n`
                    txt += `*> DURACI??N :* ${data.medias.length}\n`
                    txt += `*>URL :* ${data.url}`
                buf = await getBuffer(data.thumbnail)    
                cnf.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${text}` }, { quoted: m })
                for (let i of data.medias) {
                cnf.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    replay('Error')
                })
            }
            break
            case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)	             
             if (!text) return replay(`Donde esta el link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replay(`*Link no valido*`)
                xeonkey.Twitter(`${text}`).then(async (data) => {
                cnf.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    replay('Error')
                })
            }
            break
case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args[0]) return replay(`Ejemplo :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Titulo : ${lotwit.title ? lotwit.title : "Indefinido"}
Tipo : ${lotwit.medias[1].extension}
Peso : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Elija a continuaci??n haciendo clic en el bot??n_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Calidad ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Calidad ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdreplay:{
title:`${global.botname}`,
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
cnf.sendMessage(from, buttonMessage, {quoted:m})
} catch {
replay("Error!")
}
}
break
case 'twddlxx': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu ??????'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Listo??????",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdreplay:{
title:`${global.botname}`,
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
cnf.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
             if (!text) return replay(`Donde esta el link?`)
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return replay(`Donde esta el link?`)
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                    let txt = `*FB DOWNLOADER*\n\n`
                    txt += `*> TITULO :* ${data.title}\n`
                    txt += `*> CALIDAD :* ${data.result[0].quality}\n`
                    txt += `*> DESCRIPCI??N :* ${data.description}\n`
                    txt += `*> ID :* ${watermark}\n`
                    txt += `*> URL :* ${text}\n\n`
                buf = await getBuffer(data.thumbnail)    
                cnf.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                for (let i of data.result) {     
                cnf.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Calidad :* ${i.quality}`}, { quoted: m })
                }          
                }).catch((err) => {
                    replay('Error')
                })
            }
            break
            case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                  if (!text) return replay(`Donde esta el link?`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return replay(`Link no valido`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  cnf.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    replay('Error')
                })
            }
            break
case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args[0]) return replay(`Ejemplo :\n${prefix + command} https://fb.watch/######/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Tipo : video/${resd.medias[0].extension}
Calidad : ${resd.medias[0].quality}
Peso : ${resd.medias[0].formattedSize}

_Para calidad HD puede hacer clic en el bot??n de abajo_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'CalidadHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdreplay:{
title:`${global.botname}`,
body:"Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
cnf.sendMessage(from, buttonMessage, {quoted:m})
} catch {
replay("Link invalido!")
}
}
break
case 'fbddlxx': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu ??????'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Listo??????",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdreplay:{
title:`${global.botname}`,
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
cnf.sendMessage(from, buttonMessage, {quoted:m})
}
break
            case 'pinterest2': {
            	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                replay(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                cnf.sendMessage(m.chat, { image: { url: result }, caption: 'Link : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!text) return replay('Qu?? est??s buscando?')
                await replay(mess.wait)
                xeonkey.Webtoons(q).then(async data => {
                    let txt = `*------??? WEBTOONS-SEARCH ???------*\n\n`
                    for (let i of data) {
                        txt += `*> Titulo :* ${i.judul}\n`
                        txt += `*> Like :* ${i.like}\n`
                        txt += `*> Creador :* ${i.creator}\n`
                        txt += `*> G??nero :* ${i.genre}\n`
                        txt += `*> Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await replay(txt)
                })
                .catch((err) => {
                    replay('Error')
                })
            break
            case 'wattpad': {
            	            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
            if (!text) return replay(`Ejemplo : ${prefix + command} Amor`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad Search\n\n`
            capt += ` Titulo: ${judul}\n`
            capt += ` Leido: ${dibaca}\n`
            capt += ` Votos: ${divote}\n`
            capt += ` Capitulo: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Descripci??n: ${description}`
            cnf.sendImage(m.chat, thumb, capt, m)
            }
            break
case 'apk': case 'apkmod': case 'apkdl': {      
if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
  if (!text) return replay(`Use ${prefix + command} whatsapp`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `Categoria: ${i.kategori}\nPublicado: ${i.upload_date}\nInfo: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  cnf.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Resultados de b??squeda de ${text} Haga clic en el bot??n de abajo para elegir*`,
       footer: `${botname}`,
       title: "*APK DOWNLOADER,*",
       buttonText: "CLICK????",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    replay(`*${text} No encontrado*`)
                })
            }
            break
case 'donlod': {                
if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Use ${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) replay('*Link no valido*')
           let rex = require('./lib/ApkDown.js')
           rex.ApkDown(`${text}`).then(async (anu) => {        
           if (anu[0].size.split('MB')[0] >= 150) return replay('*Archivo por encima del l??mite* '+util.format(anu))
           for (let i of anu) {    
           linkye = `*APK DOWNLOAD*\n\n*Titulo:* ${i.title}\n*Publicado:* ${i.up}\n*Version:* ${i.vers}\n*Peso:* ${i.size}\n*Url:* \n*Desc:* ${i.desc}`         
                cnf.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                cnf.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                }  
                }).catch((err) => {
                    replay('Error')
                }) 
                }                          
                break
case 'tagme': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
cnf.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break
           case 'git': case 'gitclone':
           if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
	replay(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) replay(`Use ${prefix}gitclone repo link\nEjemplo: https://github.com/Confusion245/ConfuBotv5`)
    if (!regex1.test(args[0])) return replay(mess.linkm)
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    cnf.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replay('Error'))
			break

case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
 	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
              if (!q) return replay(`Ejemplo : ${prefix + command} ConfuBot`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                cnf.sendMessage(m.chat, { image: { url: anu }, caption: `*${prefix + command}*` }, { quoted: m })
             }
             break
            case 'drakorxxx':
               if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!text) return replay('Que estas buscando??')
                await replay(mess.wait)
                xeonkey.Drakor(`${text}`).then(async data => {
                    let txt = `*-----??? DRAKOR-SEARCH ???-----*\n\n`
                    for (let i of data) {
                        txt += `*> Titulo :* ${i.judul}\n`
                        txt += `*> A??os :* ${i.years}\n`
                        txt += `*> Genero :* ${i.genre}\n`
                        txt += `*> Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    replay('Error')
                })
            break
            case 'drakor': {
            	            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
            if (!text) return replay(`Ejemplo : ${prefix + command} Amor`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search : ${text}\n\n`
            for (let i of res.result) {
            capt += `> Titulo: ${i.judul}\n`
            capt += `> A??os: ${i.years}\n`
            capt += `> Genero: ${i.genre}\n`
            capt += `> Url: ${i.url}\n`
            capt += `> Thumbnail Url: ${i.thumbnail}\n\n??????????????????????????????????????????????????????????????????\n`
            }
            cnf.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'animexxx':{
            	   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Que estas buscando ?`)
                await replay(mess.wait)
                xeonkey.Anime(q).then(async data => {
                    let txt = `*-------??? ANIME-SEARCH ???-------*\n\n`
                    for (let i of data) {
                        txt += `*> Titulo :* ${i.judul}\n`
                        txt += `*> Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Ver ????",
						"url": `${websitex}`
						}
					}
				]
				await cnf.send5ButLoc(from, txt , `?? ConfuMods 2021-2022`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    replay('Error')
                })
                }
            break
            case 'characterxxx': case 'karakterxxx':
               if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Que personaje buscas??`)
                await replay(mess.wait)
                xeonkey.Character(q).then(async data => {
                    let txt = `*---??? CHARACTER-SEARCH ???---*\n\n`
                    for (let i of data) {
                        txt += `*> Personaje :* ${i.character}\n`
                        txt += `*> Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube ????",
						"url": `${websitex}`
						}
					}
				]
				await cnf.send5ButLoc(from, txt , `?? ConfuMods 2021-2022`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    replay('Error')
                })
            break
            case 'manga2':
               if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Que estas buscando?`)
                await replay(mess.wait)
                xeonkey.Manga(`${text}`).then(async data => {
                    let txt = `*------??? MANGA-SEARCH ???------*\n\n`
                    for (let i of data) {
                         txt += `*> Titulo :* ${i.judul}\n`
                         txt += `*> Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube????",
						"url": `${websitex}`
						}
					}
				]
				await cnf.send5ButLoc(from, txt , `?? ConfuMods 2021-2022`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    replay('Error')
                })
                case 'anime':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
	    if(!q) return replay(`Que anime estas buscando??`)
replay(mess.wait)						
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `> *Titulo: ${result.title}*\n`;
    details += `> *Formato: ${result.type}*\n`;
    details += `> *Estado: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
    details += `> *Episodios: ${result.episodes}*\n`;
    details += `> *Duraci??n: ${result.duration}*\n`;
    details += `> *Generos:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `??? *Basado en: ${result.source.toUpperCase()}*\n`;
    details += `???? *Estudios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `???? *Productores:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `???? *Estrenado en: ${result.aired.from}*\n`;
    details += `???? *Terminado en: ${result.aired.to}*\n`;
    details += `???? *Popularidad: ${result.popularity}*\n`;
    details += `???? *Favoritos: ${result.favorites}*\n`;
    details += `???? *Rating: ${result.rating}*\n`;
    details += `???? *Rank: ${result.rank}*\n\n`;
    if (result.trailer.url !== null)
      details += `??? *Trailer: ${result.trailer.url}*\n\n`;
    details += `???? *URL: ${result.url}*\n\n`;
    if (result.background !== null)
      details += `???? *Background:* ${result.background}*\n\n`;
    details += `??? *Descripci??n:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
cnf.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break
case 'manga':
   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
replay(mess.wait)						
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return replay(`Que manga estas buscando?`)
let srh = await manga.searchManga(q)
    let mang = `???? *Titulo: ${srh.data[0].title}*\n`;
    mang += `???? *Estado: ${srh.data[0].status}*\n`;
    mang += `???? *Vol??menes: ${srh.data[0].volumes}*\n`;
    mang += `???? *Capitulos: ${srh.data[0].chapters}*\n`;
    mang += `???? *G??neros:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `??? *Publicado en: ${srh.data[0].published.from}*\n`;
    mang += `???? *Puntaje:: ${srh.data[0].scored}*\n`;
    mang += `???? *Popularidad: ${srh.data[0].popularity}*\n`;
    mang += `???? *Favoritos: ${srh.data[0].favorites}*\n`;
    mang += `??? *Autores:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n???? *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
      mang += `???? *Background:* ${srh.data[0].background}`;
    mang += `?????? *Descripci??n:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
cnf.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break
            break
case 'lyrics': {
		            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
	    if (!text) return replay(`Use ejemplo ${prefix}lyrics Despacito`)
	replay(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    replay(`
> Titulo : *${result.title}*
> Author : ${result.author}
> Letra : ${result.lyrics}
> Url : ${result.link}
`.trim())
}
break
case 'earthquake':
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Tiempo: ${Waktu}\nLatitud : ${Lintang}\nLongitud : ${Bujur}\nRegion : ${Wilayah}`
cnf.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'playstore': case 'apk':
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if(!q) return replay('Que est??s buscando?')
let play = await hx.playstore(q)
let storee = '?????????????????????????????????????????????????????????????????????\n'
for (let i of play){
storee += `\n*??? *PLAY STORE* ???*\n
- *Nombre* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n?????????????????????????????????????????????????????????????????????`
}
replay(storee)
break
case 'img':
case 'image': {
	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                replay(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                cnf.sendMessage(m.chat, { image: { url: result }, caption: `> Media Url : `+result }, { quoted: m })
            }
            break
case 'mcserver': case 'mcquery': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay(`Ejemplo : \n${prefix + command} ip|port\nUse : \n${prefix + command} mc.uwucom|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return replay(`Donde esta el ip?`)
if (!portnya) return replay(`Donde esta el puerto?`)

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
replay(jsonformat(success));
return q.basicStat()
})
.then(success => {
replay(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay(`Ejemplo : ${prefix + command} shader`)
xeontod.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nNombre : ${i.name}\nCategoria : ${i.category}\nFecha : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu????'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'happymod': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay(`Ejemplo : ${prefix + command} mobile legend`)
xeontod.happymod(args.join(" ")).then(async(res) => {
teks = '```??? HappyMod Search ???```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu????'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'searchgc': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (args.length < 1) return replay(`Ejemplo :\n${prefix}searchgc Hentai`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```??? Grupos Search ???```'
for (let i of res) {
teks += `\n\n???> Grupo de Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu????'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
xeontod.servermc().then(async(res) => {
let teks = '*| MINECRAFT SERVER |*\n\nhttps://minecraftpocket-servers.com/country/chile/\n\n'
let no = 1
for (let i of res) {
teks += `> Server ${no++}\nip : ${i.ip}\npuerto : ${i.port}\nversion : ${i.versi}\njugadores : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu????'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break

case "quotes":
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
var res = await Quotes()
trad = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=es&kata=${res.quotes}`)
Infootrd = trad.info
teks = "??????????????????????????????????????????????????????"
teks += `\nAuthor: ${res.author}\n`
teks += `\nFrases:\n`
teks += `${Infootrd}\n`
teks += "??????????????????????????????????????????????????????"
replay(teks)
break

case 'frases':
if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let imagenfr = ['https://coffee.alexflipnote.dev/random']
				const fra =['Estoy cansad@ de escuchar que siempre digan las mismas frases de "busca a alguien que te de paz", \n"si no te da tranquilidad no es la persona indicada". \n\nQui??n quiere paz?\nA qui??n le gustan las relaciones lineadas y mon??tonas que viven en un punto exacto de equilibrio, \ndonde no existen los sube y baja? \nYo realmente no podr??a. \nYo necesito que mi relaci??n sea una monta??a rusa de emociones, \na veces en paz, otras guerra, hoy ganas de t??, ma??ana gano yo, \npasado toca empatar y empezar de cero, \npero siempre sin dejar de vivir. \nSon iguales de importantes los momentos de cari??o c??mo los de discusi??n. \nPorque sino fuera por las renconciliaciones donde el amor siempre sabe mejor, \nno tendr??a sentido nada, \nya la vida es demasiado mon??tona como para que las relaciones tambi??n lo sean\n\nMi consejo:\nSi te da paz y tranquilidad...ah?? no es????','????Hazlo, comete errores, \nvuelve a intentarlo, \nfalla, manda todo a la mierda,\n y empieza otra vez si es necesario. \n\n     En serio, no pasa nada????????????????','Siempre llega quien rompe todos tus miedos, \ntus inseguridades \ny hace que olvides el da??o que alguna vez te hicieron, \ncon sus mimos, sus besos y abrazos, sus peque??os detalles que te alegran la vida y todo ese amor que guarda para hacerte feliz, \ny as??, claro que te quedas????????','???Donde hay amor, hay paz??? ....\n\ndijeron alguna vez los labios de alguien\nHay personas que podr??an estar de acuerdo...\n\nHay personas que lo \n     encontrar??an confuso????','??????????Recuerda: \n\nNo importa que tan buena persona seas.\nTodos somos los malos en la historia de alguien.\nAs?? que disfruta tu rol ,\ny al menos se un villano memorable???','????La vida es como una caja de Pandora:\n\n    impredecible, \n        peligrosa, \n          y \n           llena de retos mentales y f??sicos???','Una vez alguien me dijo:\n\nSi quieres que alguien te busque, deja de buscarle. \n\nSi quieres que alguien te quiera, deja de quererle. \n\nY si quieres que alguien regrese, \ndeja de rogarle....(iron??as de la vida) \n\nY ah?? entend?? todo???????','???Cuidado con la gente que \nte acelere el coraz??n  sin tocarte.\n\n\nDuele el doble \ncuando desaparecen de golpe????','???????El perd??n te libera de la maldad ajena,\n aunque la otra persona no se arrepienta de lo que hizo...\n\nY t?? perdonas porque sabes que es lo mejor para tu salud. \nPerdonar no es necesariamente olvidar. \nQuiz??s lo recuerdes por siempre, \npero sin tristeza ,\n ni amargura en el coraz??n???????????????',' ???????????????? ???????? ???????????????????????????????? ???? ???????????? ????????????????????????????????...\n\n???????????? ???????????????????????????????? ???????????????????????????????????? ???? ???????????? ????????????????????????????????????','??????Las mujeres son como las canciones de Arjona....\n\nsi eres paciente y las escuchas, \nte dar??s cuenta \nde lo perfectas que son???????','??????????  ???????????????  ??????  ???????????? ....\n\n???????????  ??????  ???????????????????????????  ????????????????????? \n\n[??????  ?????????  ??????????????????  ??????  ????????????????????????????]','?????????El caf?? nunca se imagin?? que podr??a tener un sabor tan suave,\nhasta que conoci?? el az??car y la leche.\n\nTodos somos buenos individualmente,\npero nos volvemos mejores cuando nos\nmezclamos con las personas apropiadas????????','????Todo el tiempo estamos diciendo\n "El f??sico no importa"...\n\npero no la pasamos leyendo o viendo (pel??culas -series) ,donde los protagonistas son de cuerpos de infarto y belleza descomunal????','????Ten??a la creencia de que si no te met??as con nadie, nadie se met??a contigo.\n\nPero no es as??, \nporque hay gente a la que le molesta tu felicidad, \ntu f??sico, tu esencia, tus gustos, \nqu?? haces y que dejas de hacer???????','?????? Yo lo llamo ???Karma???...\n\nPero la biblia dice :\n\n???Cosechar??s lo que Siembras???????????','??????El tiempo cura lo que el coraz??n destroza....\n\nY aun as??,siguen hablando mal del tiempo y bien del amor????????','????Aprende a soltar al amor de tu vida que seg??n t?? es el correcto pero en realidad ya se volvi?? costumbre,\n no te idealices con una persona si no has vivido nuevas experiencias con otras, \nno te cierres y pienses que los amores que vendr??n son solo a medias. \nVive, date y qui??rete????????????','???????\n\nM??s que un lavado de manos,\nel mundo necesita un lavado de\n\n                                            CORAZ??N???','As?? como en la vida existe el\n" pasado, presente y futuro" ,\n\nen los sentimientos est?? el \n"perdona, olvida y continua"???','????La vida es el eco, \nlo que env??as es lo que regresa, \nlo que das es lo que recibes...\n\nPor eso nunca des a los dem??s \nlo que no quieras para ti ?????????','????Las personas sensibles tienen una caracter??stica:\n\nsufren mucho m??s que los dem??s, pero tambi??n se regocijan con intensidad similar de la felicidad ajena, disfrut??ndola como si fuera suya.\n\nLa sensibilidad es como la facultad de ver en un mundo de ciegos???','SI FUERA LA PRIMERA VEZ:\n\nConoces los zapatos,que llevas puesto,no es la primera vez q te los pones.Ni la segunda.Y por eso al llegar a tu casa te las quita con ayuda del otro pie,ni siquiera te preocupas si se est??n ensuciando.\n\nPero si fuera la primera vez q te los pones,te los quitar??as delicadamente.Solo si fuera la primera vez.Ahora no.Ahora llegas despu??s de un d??a agotador y lanzas en tel??fono  a la cama,pero si fuera nuevo lo dejarias en la mesa,y hasta tendr??as miedo a que se raye.\n\nY lo mismo pasa con las personas ,con tu pareja,con la familia.\n\nSABEMOS QUE ESTAN ALL?? ,\n  Y dejamos de mirarlos como si fuera\n        LA PRIMERA VEZ??????','????Somos una generaci??n\nde fotos felices ,y corazones tristes????????','???????????? ???????????????????? ???????????? ???????????? ???????????????????????????? ???????????????????????? ???????????? ???????????????????????????? ???????????????????? ???????????? ????????????????????????????....\n\n???????????????? ???????????? ???????????????????????? ??????????\n???????????????????? ???????????????????? ???????? ????????????????????????????????','????No le digas a nadie que lo supere; ay??dale a superarlo.\n\nMuchas veces nos quedamos en el territorio del mero aliento o en el de las simples palabras de ??nimo cuando, en realidad,\nlo que la otra persona necesita de ti es que te remangues y le ayudes de verdad a salir del pozo???','????????Alguna vez se han puesto mirar el cielo con atenci??n?\n\n ??Han notado que no parece real?\nParece una pintura,\nuna pintura de acuarelas????????','El amor inmaduro dice: "te amo porque te necesito". El amor maduro dice: "te necesito porque te amo" (Erich Fromm)','La vida empieza cada cinco minutos (Andreu Buenafuente)','Donde las palabras fallan la m??sica habla (Hans Christian Andersen)','Un buen viajante no tiene planes (Confucio)','Una vez aceptamos nuestros l??mites, vamos m??s all?? de ello (Albert Einstein)','Lo que no nos mata nos hace m??s fuertes (Friedrich Nietzsche)','Si caminas solo, ir??s m??s r??pido. Si caminas acompa??ado, llegar??s m??s lejos.','Una vida llena de errores no solo es m??s honorable, sino que es m??s sabia que una vida gastada sin hacer nada','Es sencillo hacer que las cosas sean complicadas, pero dif??cil hacer que sean sencillas. F. Nietzsche','No pierdas nunca el sentido del humor y aprende a re??rte de tus propios defectos','La preocupaci??n es como una mecedora, te mantiene ocupado pero no te lleva a ninguna parte',' El hombre que m??s ha vivido no es aquel que m??s a??os ha cumplido, sino aquel que m??s ha experimentado la vida','Si lo puedes so??ar, lo puedes hacer','Lo imposible es el fantasma de los t??midos y el refugio de los cobardes','El camino que nos toca recorrer est?? lleno de sorpresas. Nunca vas a estar preparado para las que te toquen a ti, sean dichosas o sombr??as, pues eso es parte de adquirir experiencia. Y descubrir cu??n gratas o desafortunadas son las que te esperan, es algo nunca podr??s evadir','La felicidad no es algo que pospones para el futuro, es algo que dise??as para el presente','El amigo ha de ser como el dinero, que antes de necesitarle, se sabe el valor que tiene','Tus acciones ser??n el reflejo de la manera que tienes de ver la vida y las que te van definir ante los dem??s. No las malgastes en cosas y actitudes que no valen la pena, solo t?? puedes decidir la forma en la que quieres que te recuerden, porque no estar??s en este mundo para siempre','El amor es lo que mueve al mundo aunque a veces parezca lo contrario. A las personas no nos har??a mal recordar esto de vez en cuando','Nunca terminas de conocer a la gente. Tus amigos, tu familia y hasta t?? mismo, pueden ocultar sorpresas que en la vida te podr??as haber imaginado, tanto buenas como malas','Todos tenemos el mismo destino, en esencia no hay manera de diferenciarnos si nacemos para llorar y re??r. Recu??rdalo, todos tenemos los d??as contados, vive cada uno de tus d??as como si fueran el regalo m??s grande, porque nadie puede asegurarte el ma??ana','Mientras vivas vas a encontrarte con todo tipo de personas, tanto buenas como malas. Es imposible adivinar las intenciones que oculta alguien detr??s de su comportamiento, pero descubrirlo es la tarea m??s interesante y peligrosa con la que te puedes llegar a topar','Los tiempos felices en la humanidad son las p??ginas vac??as de la historia','La decepci??n despu??s de un amor fallido, puede llegar a oprimir tu coraz??n hasta el punto de no dejarte respirar. Pero nadie se ha muerto de amor','No llores por la gente que se ha ido, enf??cate en quienes se encuentran a tu lado en el presente y qu??date con los buenas recuerdos de los que se marcharon','No debes enfocarte en el dolor que puedes sentir si alguien te ha falla. Si no eres capaz de perdonar una equivocaci??n, enti??rrala y sigue adelante','Amar es la aventura m??s grande en la que te puedes embarcar. Porque te puede hacer volar m??s alto de lo que jam??s imaginarte y tambi??n ponerte los pies de la tierra']
 				const jys = fra[Math.floor(Math.random() * fra.length)]

																let buttons = [
                    {buttonId: `frases`, buttonText: {displayText: 'Next ??????'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: imagenfr },
                    caption: `???????????????????????????\n\n${jys}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
          
            break

break

case 'piropos': case 'piropo':
				const mary =['Algunos quieren ser ricos a trav??s del dinero, otros del poder, pero lo que no saben, es que la ??nica riqueza es tu amor verdadero.','So??ando contigo he tenido una revelaci??n, ahora necesito que me hagas un hueco en tu coraz??n.','Aunque por tu coraz??n han pasado muchas personas, me gustar??a que me hicieses un huequecito eterno, por peque??o que sea, por si pasa algo, para que no me olvides jam??s.','Lo que siento por ti es tan inmenso que, para guardarlo, me har??a falta otro universo.','me he convertido en un capit??n pirata para asaltar tu coraz??n y robarle el amor.','Me preguntaste por qu?? te amaba y no pude responderte. Hoy entiendo que el amor verdadero es indescriptible, solo se puede sentir.','Ojal?? fuese papel para poder envolverte, bomb??n.','Ans??o besarte, abrazarte y no soltarte','A lo mejor mi hogar no es un palacio, pero me gustar??a que t?? fueses mi princesa.','Te amo demasiado, lo deseo todo contigo, por eso me vuelvo loc@, cuando t?? no est??s conmigo.','??De casualidad tienes un mapa contigo? Porque tengo el inter??s de navegar por esa linda mirada','Desde que te he visto me he convertido un/a astronauta porque no he bajado de las galaxias','A pesar de que el cielo est?? lleno de estrellas, t?? eres la m??s importante para mi','Si ser guapo fuera pcado, ya estar??as haciendo penitencia','Los que dicen que Disneyland es el lugar m??s feliz del mundo no han estado junto a ti????','Si ser guapo matara, ser??as la bomba at??mica????','Si fuera gato, pasar??a mis nueve vidas contigo','??Y si nos comemos unos tacos y yo te a-taco a besos?']
				const js = mary[Math.floor(Math.random() * mary.length)]
replay(js)
break
	   case 'ppcp': case 'couplepp':  case 'ppcouple': {
		   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                cnf.sendMessage(m.chat, { image: { url: random.male }, caption: `Masculino ??????` }, { quoted: m })
                cnf.sendMessage(m.chat, { image: { url: random.female }, caption: `Femenino ?????????` }, { quoted: m })
            }
	    break
            case 'animequotes': case 'animequote': {
            	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
		let { quotesAnime } = require('./lib/scraperW')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
tradd = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=es&kata=${result.quotes}`)
restrad = tradd.info
                
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${restrad}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Presiona el bot??n de abajo',
                    buttons: buttons,
                    headerType: 2
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'wallpaper': case 'animewallpaper': case 'animewall': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                if (!args.join(" ")) return replay("Que estas buscando??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next ??????'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Titulo : ${result.title}\nCategoria : ${result.type}\nDetalles : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

case 'wiki': case 'wikipedia':
 	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
if (args.length < 1) return replay('Que estas buscando ?? ')
const res2 = await XeonBotIncWiki(q).catch(e => {
return replay('*[???] Resultado no encontrado*') 
}) 
const result2 = `*Titulo :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
cnf.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
            case 'wikimedia': {
            	 	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Que est??s buscando?`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next ??????'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `> Titulo : ${result.title}\n> Fuente : ${result.source}\n> Media Url : ${result.image}`,
                    footer: cnf.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
            	 	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
traddd = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=es&kata=${result.quotes}`)
Infootrdd = traddd.info

                            let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next ??????'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${Infootrdd}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Presione el bot??n de abajo',
                    buttons: buttons,
                    headerType: 2
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           case 'zodiaco': case 'signo': case 'zodiak': case 'zodiac': {
            	   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Ejemplo : ${prefix+ command} 23 5 2000`)
                let zodiak = [
                    ["capricornio", new Date(1970, 0, 1)],
                    ["aquario", new Date(1970, 0, 20)],
                    ["piscis", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["tauro", new Date(1970, 3, 21)],
                    ["geminis", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["escorpio", new Date(1970, 9, 23)],
                    ["sagitario", new Date(1970, 10, 22)],
                    ["capricornio", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'fecha invalida') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return replay(anu.message)
                cnf.sendText(m.chat, `> *Signo :* ${anu.message.zodiak}\n> *Elemento :* ${anu.message.elemen_keberuntungan}\n> *Pareja zodiacal :* ${anu.message.pasangan_zodiak}`, m)
            }
            break
	    case 'tiktok':{
  	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
  if (!q) return replay('Donde esta el link?')
  replay(mess.wait)
  if (!q.includes('tiktok')) return replay(`Link no v??lido`)
   const musim_rambutan = await XeonBotIncTiktok(`${q}`).catch(e => {
 replay('Error') 
} )
   console.log(musim_rambutan)
   const xeontiktokop = musim_rambutan.result.watermark
texttk = `??Quieres descargar sin marca de agua o audio?
*Por favor, elija el bot??n de abajo*`
let buttons = [
{buttonId: `ttnowm ${q}`, buttonText: {displayText: 'Sin marca de agua ???'}, type: 1},
{buttonId: `ttaud ${q}`, buttonText: {displayText: 'Audio ????'}, type: 1}
]
let buttonMessage = {
video: {url:xeontiktokop},
caption: texttk,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdreplay:{
title: `${ownername}`,
body: `${pushname}`,
thumbnail: log0,
mediaType:1,
mediaUrl: q,
sourceUrl: q
}}
}
cnf.sendMessage(from, buttonMessage, {quoted:m})
}
break
  case 'tiktoknowm': case 'ttnowm':{
  	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
  if (!q) return replay('Donde esta el link?')
  replay(mess.wait)
  if (!q.includes('tiktok')) return replay(`link no v??lido`)
   const musim_rambutan = await XeonBotIncTiktok(`${q}`).catch(e => {
 replay('Error') 
} )
   console.log(musim_rambutan)
   const xeonytiktoknowm = musim_rambutan.result.nowatermark
    cnf.sendMessage(from, { video: { url: xeonytiktoknowm }, caption: "Listo??????" }, { quoted: m })
   }
  break
  case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
  if (!q) return replay('Donde esta el link?')
  if (!q.includes('tiktok')) return replay(`Link no v??lido`)
   const musim_rambutan = await XeonBotIncTiktok(`${q}`).catch(e => {
 replay('Error') 
} )
   console.log(musim_rambutan)
   const xeonytiktokaudio = musim_rambutan.result.nowatermark
    cnf.sendMessage(from, { audio: { url: xeonytiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break


		                case 'slot':	
	   if (isBan) return  reply(mess.ban)
 const pb = ['100','50','50','50']
const pv = pb[Math.floor(Math.random() * pb.length)]
const pn = [`${pv}`]


const prd = [
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
        '???? : ???? : ????',		
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????'
		] 
const gnd = [
        '???? : ???? : ????',
	    '???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????',
		'???? : ???? : ????'
		]
	const pbb = prd[Math.floor(Math.random() * prd.length)]
	const pbbn = prd[Math.floor(Math.random() * prd.length)]
	const pvv = gnd[Math.floor(Math.random() * gnd.length)]     

    if (pn < 100) return replay(`????????????????????????????????????????????????????
??? ???????????????????????????????????? ???
        ???? : ???? : ????
??? ???????????????????????????????????? ???
        ${pbb}
??? ???????????????????????????????????? ???
        ${pbbn}
??? ???????????????????????????????????? ???
????????????????????????????????????????????????????

 ???????? ???????????????????????? ???????? ???????? ???????????????????????????? ???? ???????????????????????? ???????????????????? ???????????????????????? ???????? ????????????????????????????`)
    replay(`????????????????????????????????????????????????????
??? ???????????????????????????????????? ???
        ???? : ???? : ????
??? ???????????????????????????????????? ???
        ${pvv}
??? ???????????????????????????????????? ???
        ${pbbn}
??? ???????????????????????????????????? ???
????????????????????????????????????????????????????    

???????????????????????????????????????????? ???????? ???????????????????????? 500????????????!`)
let premio = 500
    addMonay(m.sender, premio)                   
          break

	case 'music': case 'play': case 'song': case 'ytplay': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `ytvd ${ytvc.link}`, buttonText: {displayText: '??? Video'}, type: 1},
{buttonId: `ytad ${ytvc.mp3}`, buttonText: {displayText: '??? Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `????????????????????? *????????????????* ????????????????????????
?????? *Nombre* : 
???
${anu.title}
???
?????? *Fuente* : 
???
${anu.author.url}
???
?????? *Duraci??n* : 
???
${anu.timestamp}
???
?????? *Link* :
???
*${anu.url}
???
????????????????????????????????????????????????????????????`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdreplay:{
title: anu.title,
body: `${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'getmusic': case 'getvideo': case 'yt': case 'youtube': case 'ytvideo': case 'ytmp3': case 'ytmp4': case 'ytmusic': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args[0]) return replay(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

> Titulo : ${res.title}
> Peso : ${res.size}
> Calidad : ${res.quality}

_Seleccione video o audio y espere un momento_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '??? Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '??? Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdreplay:{
title: res.title,
body: `${global.ownername}`,
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
cnf.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
replay("Link error!")
}
}
break
case 'ytvd': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
cnf.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Listo??????", contextInfo:{externalAdreplay:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
}
break
case 'ytad': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
cnf.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdreplay:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
}
break
            case 'ytdl': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return replay(`*[???] Link no valido*`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
                if (anu.filesize_video >= 999999) return replay('*Peso por encima del l??mite* '+util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)   
const infovid = `????????????????????? *???????????????????????????? ????????* ????????????????????????
?????? *Nombre* : 
???
${anu.title}
???
?????? *Thumb* : 
???
${anu.thumb}
???
?????? *Link* :
???
${anu.video}
???
????????????????????????????????????????????????????????????`
                cnf.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => replay('Error'))
                cnf.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${infovid}`}, { quoted: m }).catch((err) => replay('Error'))
            }
            break
case 'ytshorts': case 'shorts': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
  if (!text) return replay(`*Use ${prefix + command} enlace de short de YouTube*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) return replay(`*[???] Link no valido*`)
  xeonkey.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 999) return replay('*Peso por encima del l??mite* '+util.format(data)) 
  cap = `
*YOUTUBE SHORTS*

*> Titulo:* ${data.title}\n*> Calidad:* ${data.medias[0].quality}\n*> Peso:* ${data.medias[0].formattedSize}\n*> DURACI??N* ${data.duration}\n*> ID:* ${data.medias[0].cached}\n*> LINK:* ${data.url}`
  buf = await getBuffer(data.thumbnail)
  cnf.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  cnf.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*> Titulo:* ${data.title}\n*> Calidad:* ${data.medias[0].quality}\n*> Peso:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    replay('Error')
                })
            }
            break
	  case 'pinterest': case 'pin': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay("Que estas buscando??")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next ??????'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  `> Titulo : ` + args.join(" ") + `\n> Media Url : `+imgnyee,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdreplay:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}
}
cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
replay("Error")
}
}
break
case 'mediafire': {
	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
if (!text) return replay(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replay(`*[???] Link no v??lido*`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return replay('*Peso por encima del limite* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*> Nombre* : ${baby1[0].nama}
*> Peso* : ${baby1[0].size}
*> Extencion* : ${baby1[0].mime}
*> Link* : ${baby1[0].link}`
replay(`${result4}`)
cnf.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break

        case 'ringtone': {
        	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
		if (!text) return replay(`??D??nde est?? el nombre del tono de llamada?, Ejemplo : ${prefix + command} charlie puth`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		cnf.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tempo': {
if (isBan) return replay(mess.ban)
if (!args.join(" ")) return replay(`Ejemplo: ${prefix + command} 10`)
var req = args.join(' ')
media = await cnf.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replay('Error!')
hah = fs.readFileSync(ran)
cnf.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replay('Error!')
hah = fs.readFileSync(ran)
cnf.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
replay("Envia un video/audio")
}
}
break
case 'volume': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay(`Ejemplo: ${prefix + command} 10`)
media = await cnf.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replay('Error!')
jadie = fs.readFileSync(rname)
cnf.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replay('Error!')
jadie = fs.readFileSync(rname)
cnf.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replay("Envia un video/audio")
}
}
break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
		if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return console.log(err)
                let buff = fs.readFileSync(ran)
                cnf.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replay(`Etiqueta al audio que desea cambiar con *${prefix + command}*`)
                } catch (e) {
                replay('Error')
                }
                break
            case 'setcmd': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!m.quoted) return replay(`Etiqueta un mensaje`)
                if (!m.quoted.fileSha256) return replay(`SHA256 Falta hash`)
                if (!text) return replay(`Que comando?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replay(`*[??????] No tienes permiso para cambiar este comando*`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replay(`Listo??????`)
            }
            break
            case 'delcmd': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replay(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replay(`*[??????] No tienes permiso para eliminar este comando*`)
                delete global.db.data.sticker[hash]
                replay(`Listo??????`)
            }
            break
            case 'listcmd': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                let teks = `
*Hash List*
Info: *bold* hash est?? bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                cnf.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return replay(`Etiqueta un mensaje`)
                if (!m.quoted.fileSha256) return replay(`SHA256 Falta hash`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return replay(`Hash no encontrado en la base de datos`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replay('Listo??????')
            }
            break
            case 'addmsg': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!m.quoted) return replay(`Etiqueta el mensaje que desea guardar en la base de datos`)
                if (!text) return replay(`Ejemplo : ${prefix + command} Nombre del archivo`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return replay(`'${text}' Ha Sido Registrado En La Lista De Mensajes`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replay(`Mensaje agregado correctamente en la lista de mensajes como '${text}'
    
Acceso ${prefix}getmsg ${text}

Ver lista de mensajes ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!text) return replay(`Ejemplo : ${prefix + command} Nombre del archivo\n\nVer lista de mensajes ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return replay(`'${text}' No aparece en la lista de mensajes`)
                cnf.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '??? DATABASE ???\n\n'
		for (let i of seplit) {
		    teks += `> *Nombre :* ${i.nama}\n> *Tipo :* ${getContentType(i.message).replace(/Message/i, '')}\n????????????????????????????????????????????????????????????????????????\n\n`
	        }
	        replay(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replay(`'${text}' No aparece en la lista de mensajes`)
		delete msgs[text.toLowerCase()]
		replay(`Eliminar con ??xito '${text}' De la lista de mensajes`)
            }
	    break
            case 'public': 
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                cnf.public = true
                replay('Cambio exitoso a uso p??blico')
            
            break
            case 'self': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                cnf.public = false
                replay('Cambio exitoso a uso privado')
            }
            break
case 'setstatuts':
case 'setbio':
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!q) return replay('Enviar pedidos *#setbio texto*')
cnf.setStatus(`${q}`)
replay(mess.success)
break
case 'antitag': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!isCreator) return
if (args.length < 1) return replay(`Escribe on para activar\nEscribe off para desactivar`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
replay(`*[??????] Antitag activado con ??xito*`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
replay(`*[??????] Antitag desactivado con ??xito*`)
} else {
replay('Elija on/off')
}
}
break

/* case 'menu': case 'help':{
		if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
cnf.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
	                let btn = [{
                                urlButton: {
                                    displayText: 'YouTube ????',
                                    url: `${websitex}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Script ??????',
                                    url: `${botscript}`
                                }
                            }, {
                                quickreplayButton: {
                                    displayText: 'All Menu ????',
                                    id: 'allmenu'
                                }
                            }, {
                                quickreplayButton: {
                                    displayText: 'List Menu ????',
                                    id: 'command'
                                }  
                            }, {
                                quickreplayButton: {
                                    displayText: 'Owner ????',
                                    id: 'owner'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        
                        cnf.send5ButImg(m.chat, menulist, global.botname, global.thumb, btn, global.thumb)
                     }
            break*/
            
/*               case 'comandos': case 'command': {
                	   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Por favor elige el men??\n\n`,
                    buttonText: "Menu",
                    footerText: `${global.botname}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Comandos principales del bot ???",
								"rows": [
									{
										"title": "Otros ???",
										"description": "Muestra la lista de comandos variados",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "Comandos del Bot ???????",
								"rows": [
									{
										"title": "All Menu ????",
										"description": "Muestra todos los comandos!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu ????",
										"description": "Muestra los comandos de mi creador",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Grupo Menu ???",
										"description": "Muestra los comandos para grupos",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "Maker Menu ????",
										"description": "Muestra los comandos para logos",
										"rowId": `${prefix}indomenu`
									},
									{
										"title": "Audio Menu ????",
										"description": "Muestra los comandos de audio",
										"rowId": `${prefix}soundmenu`
									},
									{
										"title": "Downloads Menu ??????",
										"description": "Muestra los comandos de descarga",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Sticker Menu ????",
										"description": "Muestra los comandos para stickers",
										"rowId": `${prefix}indomenu`
									},
									{
										"title": "Search Menu ????",
										"description": "Muestra los comandos de b??squeda",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Tools Menu ??????",
										"description": "Muestra los comandos de ajustes de el bot",
										"rowId": `${prefix}toolmenu`
									},
									{
										"title": "Random Imagen Menu ????",
										"description": "Muestra los comandos de imagen random",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "Efecto de imagen Menu ???????",
										"description": "Muestra los comandos para a??adir efectos a imagen",
										"rowId": `${prefix}imageeffectmenu`
									},
										{
											"title": "Anime Menu ????",
										"description": "Muestra los comandos de anime",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Emoji Menu ????",
										"description": "Muestra los comandos de emoji",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "Anime Sticker Menu ??????",
										"description": "Muestra los comandos para stickers",
										"rowId": `${prefix}animestickermenu`
									     },
									{
										"title": "Nsfw Menu ????",
										"description": "Muestra los comandos +18",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "Fun Menu ????",
										"description": "Muestra los comandos divertidos",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "Game Menu ????",
										"description": "Muestra los comandos para jugar",
										"rowId": `${prefix}indomenu`
									},
										{
											"title": "Convertidor Menu ??????",
										"description": "Muestra los comandos de convertidor",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu ??????",
										"description": "Muestra los comandos de la base de datos",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Hor??scopo Menu ???????",
										"description": "Muestra los comandos de el hor??scopo",
										"rowId": `${prefix}indohoroscopemenu`
										}
								]
							},
							{
								"title": "Creditos ?????",
								"rows": [
									{
										"title": "Thanks to ??????",
										"description": "Muestra los creditos de el bot",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            cnf.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break*/
      case 'tqtt': case 'credits': case 'creditos':
   cred = `????????? *????????????????????????????????* ???
?????? *HiroBeet*
?????? *TheShadowBrokers*
?????? *TheKillerMax*
?????? *Xeon*
?????? *Samu330*
?????? *Yukiniko*
?????? *Sofi*
?????? *Felix*
?????? *EliH*
?????? *NabutoLS*
?????? *Developers-Union AZ*
??????????????????????????????????????????????????????????????????`
await cnf.send5ButImg(from, `${cred}` + '' + ' ', `${botname}`,log0, [{"urlButton": {"displayText": "YouTube ????","url": `${websitex}`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickreplayButton": {"displayText": "Donar ????","id": 'donate'}},{"quickreplayButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
 
 
case 'menu':
	   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)

await cnf.send5ButImg(from, `*????????????????????????????????????????????????-?????????????????????????????????????*
*??????????????????????????????????????????????????????????????????????????*
*??????:*?????? ???????????? ??? ??? ???????? ??? ????? 
*??????:CREADOR: ????????????????????-????????*
*??????:YT : LuckyBots*
*??????:NUMERO : wa.me/34643694252*
*??????:*?????? ???????????? ??? ??? ?????????? ??? ??? 
*??????????????????????????????????????????????????????????????????????????*
*????????????????????????????????????????????????-?????????????????????????????????????*

*????????????????????????? *???????? ????????????????* ?????????????????????????*
*??? ???*
*??? ??? Coins :*
*??? ??? ${getMonay(m.sender)}*
*??? ??? XP :*
*??? ??? ${getLevelingXp(m.sender)}*
*??? ??? Level :*
*??? ??? ${getLevelingLevel(m.sender)}*
*??? ??? Rol :*
*??? ??? ${role}*
*??? ???*
*????????????????????????? ???????? ???????? ???????????????*
*??? ???*
*??? ??? ${prefix}info*
*??? ??? ${prefix}ping*
*??? ??? ${prefix}creador*
*??? ??? ${prefix}creditos*
*??? ???*
*????????????????????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}tts*
*??? ??? ${prefix}play*
*??? ??? ${prefix}attp*
*??? ??? ${prefix}sticker*
*??? ???*
*????????????????????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}self*
*??? ??? ${prefix}public*
*??? ??? ${prefix}antitag*
*??? ??? ${prefix}rentbot [add/del]*
*??? ??? ${prefix}rentlist*
*??? ??? ${prefix}ban [add/del]*
*??? ??? ${prefix}banchat [on/off]*
*??? ??? ${prefix}join [link]*
*??? ??? ${prefix}leavegc*
*??? ??? ${prefix}setbio*
*??? ??? ${prefix}bcgroup [text]*
*??? ??? ${prefix}bcall [text]*
*??? ??? ${prefix}bcimage*
*??? ??? ${prefix}bcvideo [video]*
*??? ??? ${prefix}bcaudio [audio]*
*??? ??? ${prefix}bcloc [text]*
*??? ??? ${prefix}setppbot*
*??? ??? ${prefix}setexif*
*??? ??? ${prefix}block*
*??? ??? ${prefix}unblock*
*??? ??? ${prefix}coowner [add/del]*
*??? ???*
*????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}grousetting*
*??? ??? ${prefix}grouplink*
*??? ??? ${prefix}ephemeral*
*??? ??? ${prefix}setgcpp*
*??? ??? ${prefix}setname [text]*
*??? ??? ${prefix}setdesc [text]*
*??? ??? ${prefix}group*
*??? ??? ${prefix}resetgrouplink*
*??? ??? ${prefix}editinfo*
*??? ??? ${prefix}add*
*??? ??? ${prefix}kick*
*??? ??? ${prefix}hidetag [text]*
*??? ??? ${prefix}tagall [text]*
*??? ??? ${prefix}antiarabe [on/off]*
*??? ??? ${prefix}antilinkgc [on/off]*
*??? ??? ${prefix}antilinktg [on/off]*
*??? ??? ${prefix}antilinktt [on/off]*
*??? ??? ${prefix}antilinkytch [on/off]*
*??? ??? ${prefix}antilinkytvid [on/off]*
*??? ??? ${prefix}antilinkig [on/off]*
*??? ??? ${prefix}antilinkfb [on/off]*
*??? ??? ${prefix}antilinktwit [on/off]*
*??? ??? ${prefix}antilinkall [on/off]*
*??? ??? ${prefix}antivirus [on/off]*
*??? ??? ${prefix}antitoxic [on/off]*
*??? ??? ${prefix}antiwame [on/off]*
*??? ??? ${prefix}autoreplay [on/off]*
*??? ??? ${prefix}nsfw [on/off]*
*??? ??? ${prefix}promote*
*??? ??? ${prefix}demote*
*??? ??? ${prefix}react*
*??? ??? ${prefix}vote*
*??? ??? ${prefix}devote*
*??? ??? ${prefix}upvote*
*??? ??? ${prefix}checkvote*
*??? ??? ${prefix}delvote*
*??? ???*
*????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}candy*
*??? ??? ${prefix}blackpinkneon*
*??? ??? ${prefix}deepsea*
*??? ??? ${prefix}scifi*
*??? ??? ${prefix}fiction*
*??? ??? ${prefix}berry*
*??? ??? ${prefix}fruitjuice*
*??? ??? ${prefix}biscuit*
*??? ??? ${prefix}wood*
*??? ??? ${prefix}chocolate*
*??? ??? ${prefix}matrix*
*??? ??? ${prefix}blood*
*??? ??? ${prefix}halloween*
*??? ??? ${prefix}wicker*
*??? ??? ${prefix}darkgold*
*??? ??? ${prefix}firework*
*??? ??? ${prefix}skeleton*
*??? ??? ${prefix}sand*
*??? ??? ${prefix}glue*
*??? ??? ${prefix}leaves*
*??? ??? ${prefix}magma*
*??? ??? ${prefix}lava*
*??? ??? ${prefix}rock*
*??? ??? ${prefix}bloodglas*
*??? ??? ${prefix}underwater*
*??? ??? ${prefix}textmaker*
*??? ??? ${prefix}honey*
*??? ??? ${prefix}ice*
*??? ??? ${prefix}watercolor*
*??? ??? ${prefix}multicolor*
*??? ??? ${prefix}snow*
*??? ??? ${prefix}harrypot*
*??? ??? ${prefix}harrypotter*
*??? ??? ${prefix}brokenglass*
*??? ??? ${prefix}waterpipe*
*??? ??? ${prefix}spooky*
*??? ??? ${prefix}circuit*
*??? ??? ${prefix}metallic*
*??? ??? ${prefix}demon*
*??? ??? ${prefix}sparklechristmas*
*??? ??? ${prefix}christmas*
*??? ??? ${prefix}3dchristmas*
*??? ??? ${prefix}3dbox*
*??? ??? ${prefix}waterdrop*
*??? ??? ${prefix}lion2*
*??? ??? ${prefix}papercut*
*??? ??? ${prefix}transformer*
*??? ??? ${prefix}neondevil*
*??? ??? ${prefix}3davengers*
*??? ??? ${prefix}3dstone*
*??? ??? ${prefix}3dstone2*
*??? ??? ${prefix}summertime*
*??? ??? ${prefix}thunder*
*??? ??? ${prefix}window*
*??? ??? ${prefix}graffiti*
*??? ??? ${prefix}graffitibike*
*??? ??? ${prefix}pornhub*
*??? ??? ${prefix}glitch*
*??? ??? ${prefix}blackpink*
*??? ??? ${prefix}glitch2*
*??? ??? ${prefix}glitch3*
*??? ??? ${prefix}3dspace*
*??? ??? ${prefix}lion*
*??? ??? ${prefix}3dneon*
*??? ??? ${prefix}greenneon*
*??? ??? ${prefix}bokeh*
*??? ??? ${prefix}holographic*
*??? ??? ${prefix}bear*
*??? ??? ${prefix}wolf*
*??? ??? ${prefix}joker*
*??? ??? ${prefix}dropwater*
*??? ??? ${prefix}dropwater2*
*??? ??? ${prefix}thewall*
*??? ??? ${prefix}neonlight*
*??? ??? ${prefix}natural*
*??? ??? ${prefix}carbon*
*??? ??? ${prefix}pencil*
*??? ??? ${prefix}blackpink2*
*??? ??? ${prefix}neon*
*??? ??? ${prefix}neonlight2*
*??? ??? ${prefix}toxic*
*??? ??? ${prefix}strawberry*
*??? ??? ${prefix}discovery*
*??? ??? ${prefix}1917*
*??? ??? ${prefix}sci_fi*
*??? ??? ${prefix}ancient*
*??? ??? ${prefix}fabric*
*??? ??? ${prefix}hoorror*
*??? ??? ${prefix}whitebear*
*??? ??? ${prefix}juice*
*??? ??? ${prefix}batman*
*??? ??? ${prefix}multicolor*
*??? ??? ${prefix}collwall*
*??? ??? ${prefix}wonderful*
*??? ??? ${prefix}cool*
*??? ??? ${prefix}sketch*
*??? ??? ${prefix}marvel*
*??? ??? ${prefix}foggy*
*??? ??? ${prefix}writing*
*??? ??? ${prefix}halloweenfire*
*??? ??? ${prefix}halloween*
*??? ??? ${prefix}watercolor*
*??? ??? ${prefix}classic*
*??? ???*
*????????????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}instagram [url]*
*??? ??? ${prefix}igtv [url]*
*??? ??? ${prefix}igstory [username]*
*??? ??? ${prefix}facebook [url]*
*??? ??? ${prefix}fbmp3 [url]*
*??? ??? ${prefix}twitter [url]*
*??? ??? ${prefix}twittermp3 [url]*
*??? ??? ${prefix}tiktok [url]*
*??? ??? ${prefix}tiktokaudio [url]*
*??? ??? ${prefix}tiktoknowm [url]*
*??? ??? ${prefix}mediafire [url]*
*??? ??? ${prefix}ytmp3 [url]*
*??? ??? ${prefix}ytmp4 [url]*
*??? ??? ${prefix}getmusic [yt link]*
*??? ??? ${prefix}getvideo [link]*
*??? ??? ${prefix}gitclone [link]*
*??? ??? ${prefix}soundcloud [url]*
*??? ??? ${prefix}zippyshare [url]*
*??? ???*
*????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}play [text]*
*??? ??? ${prefix}song [text]*
*??? ??? ${prefix}yts [text]*
*??? ??? ${prefix}wamod [text]*
*??? ??? ${prefix}lyrics [text]*
*??? ??? ${prefix}google [text]*
*??? ??? ${prefix}playstore [text]*
*??? ??? ${prefix}gimage [text]*
*??? ??? ${prefix}pinterest [text]*
*??? ??? ${prefix}image [text]*
*??? ??? ${prefix}wallpaper [text]*
*??? ??? ${prefix}searchgc [text]*
*??? ??? ${prefix}happymod [text]*
*??? ??? ${prefix}servermc*
*??? ??? ${prefix}mcpedl [text]*
*??? ??? ${prefix}wikimedia [text]*
*??? ??? ${prefix}ytsearch [text]*
*??? ??? ${prefix}ringtone [text]*
*??? ??? ${prefix}webtoon [text]*
*??? ??? ${prefix}anime [text]*
*??? ??? ${prefix}animestory [text]*
*??? ??? ${prefix}manga [text]*
*??? ??? ${prefix}wattpad [text]*
*??? ??? ${prefix}mcserver [ip|port]*
*??? ???*
*????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}toimage*
*??? ??? ${prefix}sticker*
*??? ??? ${prefix}take*
*??? ??? ${prefix}smeme*
*??? ??? ${prefix}emoji*
*??? ??? ${prefix}tovideo*
*??? ??? ${prefix}togif*
*??? ??? ${prefix}tourl*
*??? ??? ${prefix}tovn*
*??? ??? ${prefix}tomp3*
*??? ??? ${prefix}toaudio*
*??? ??? ${prefix}ebinary*
*??? ??? ${prefix}dbinary*
*??? ??? ${prefix}tinyurl*
*??? ??? ${prefix}styletext*
*??? ??? ${prefix}volume*
*??? ??? ${prefix}tempo*
*??? ??? ${prefix}bass*
*??? ??? ${prefix}blown*
*??? ??? ${prefix}deep*
*??? ??? ${prefix}earrape*
*??? ??? ${prefix}fast*
*??? ??? ${prefix}fat*
*??? ??? ${prefix}nightcore*
*??? ??? ${prefix}reverse*
*??? ??? ${prefix}robot*
*??? ??? ${prefix}slow*
*??? ??? ${prefix}squirrel*
*??? ???*
*????????????????????? ???????????????????????????*
*??? ???*
*??? ??? ${prefix}wanted*
*??? ??? ${prefix}blur*
*??? ??? ${prefix}framed*
*??? ??? ${prefix}gayeffect*
*??? ??? ${prefix}imagesketch*
*??? ??? ${prefix}invert*
*??? ??? ${prefix}burn*
*??? ??? ${prefix}triggeredwebp*
*??? ??? ${prefix}shit*
*??? ??? ${prefix}rip*
*??? ??? ${prefix}jail*
*??? ??? ${prefix}beautifuleffect*
*??? ??? ${prefix}deleteeffect*
*??? ??? ${prefix}pixelate*
*??? ???*
*????????????????????????????????? ???????????????*
*??? ???*
*??? ??? ${prefix}coffee*
*??? ??? ${prefix}bts*
*??? ??? ${prefix}woof*
*??? ??? ${prefix}meow*
*??? ??? ${prefix}lizard*
*??? ??? ${prefix}wallneon*
*??? ??? ${prefix}wallpubg*
*??? ??? ${prefix}wallml*
*??? ??? ${prefix}wallrandom*
*??? ??? ${prefix}wallcode*
*??? ??? ${prefix}animewall*
*??? ??? ${prefix}animewall2*
*??? ???*
*????????????????????????????????*
*??? ???*
*??? ??? ${prefix}instagramemoji*
*??? ??? ${prefix}facebookemoji*
*??? ??? ${prefix}iphoneemoji*
*??? ??? ${prefix}samsungemoji*
*??? ??? ${prefix}joyemoji*
*??? ??? ${prefix}skypeemoji*
*??? ??? ${prefix}twitteremoji*
*??? ??? ${prefix}whatsappemoji*
*??? ??? ${prefix}microsoftemoji*
*??? ??? ${prefix}googleemoji*
*??? ??? ${prefix}pediaemoji*
*??? ??? ${prefix}microsoftemoji*
*??? ???*
*????????????????????????????????*
*??? ???*
*??? ??? ${prefix}naruto*
*??? ??? ${prefix}yaoi*
*??? ??? ${prefix}neko2*
*??? ??? ${prefix}waifu*
*??? ??? ${prefix}waifu2*
*??? ??? ${prefix}awoo2*
*??? ??? ${prefix}shinobu*
*??? ??? ${prefix}waifu3*
*??? ??? ${prefix}foxgirl*
*??? ??? ${prefix}megumin2*
*??? ??? ${prefix}loli*
*??? ??? ${prefix}8ball*
*??? ??? ${prefix}animenom*
*??? ??? ${prefix}goose*
*??? ??? ${prefix}avatar*
*??? ??? ${prefix}tickle*
*??? ??? ${prefix}gecg*
*??? ??? ${prefix}feed*
*??? ??? ${prefix}animeslap*
*??? ??? ${prefix}animespank*
*??? ??? ${prefix}animepat*
*??? ??? ${prefix}animeneko*
*??? ??? ${prefix}animekiss*
*??? ??? ${prefix}animewlp*
*??? ??? ${prefix}animecuddle*
*??? ??? ${prefix}animecry*
*??? ??? ${prefix}animekill*
*??? ??? ${prefix}animelick*
*??? ??? ${prefix}animebite*
*??? ??? ${prefix}animeyeet*
*??? ??? ${prefix}animebully*
*??? ??? ${prefix}animebonk*
*??? ??? ${prefix}animewink*
*??? ??? ${prefix}animepoke*
*??? ??? ${prefix}animesmile*
*??? ??? ${prefix}animewave*
*??? ??? ${prefix}animeawoo*
*??? ??? ${prefix}animeblush*
*??? ??? ${prefix}animesmug*
*??? ??? ${prefix}animeglomp*
*??? ??? ${prefix}animehappy*
*??? ??? ${prefix}animedance*
*??? ??? ${prefix}animecringe*
*??? ??? ${prefix}animehighfive*
*??? ??? ${prefix}animehandhold*
*??? ??? ${prefix}animemegumin*
*??? ??? ${prefix}smug2*
*??? ??? ${prefix}couplepp*
*??? ???*
*????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}emoji*
*??? ??? ${prefix}emojimix*
*??? ??? ${prefix}attp*
*??? ??? ${prefix}ttp*
*??? ??? ${prefix}lovesticker*
*??? ???*
*????????????????????????????? ???????????????????????????????*
*??? ???*
*??? ??? ${prefix}loli*
*??? ??? ${prefix}bully*
*??? ??? ${prefix}cuddle*
*??? ??? ${prefix}cry*
*??? ??? ${prefix}hug*
*??? ??? ${prefix}awoo*
*??? ??? ${prefix}kiss*
*??? ??? ${prefix}lick*
*??? ??? ${prefix}pat*
*??? ??? ${prefix}smug*
*??? ??? ${prefix}bonk*
*??? ??? ${prefix}yeet*
*??? ??? ${prefix}blush*
*??? ??? ${prefix}smile*
*??? ??? ${prefix}wave*
*??? ??? ${prefix}highfive*
*??? ??? ${prefix}handhold*
*??? ??? ${prefix}nom*
*??? ??? ${prefix}glomp*
*??? ??? ${prefix}bite*
*??? ??? ${prefix}slap*
*??? ??? ${prefix}kill*
*??? ??? ${prefix}happy*
*??? ??? ${prefix}wink*
*??? ??? ${prefix}poke*
*??? ??? ${prefix}dance*
*??? ??? ${prefix}cringe*
*??? ??? ${prefix}neko*
*??? ??? ${prefix}gura*
*??? ???*
*????????????????????????????*
*??? ???*
*??? ??? ${prefix}hentaivideo*
*??? ??? ${prefix}yuri*
*??? ??? ${prefix}masturbation*
*??? ??? ${prefix}thighs*
*??? ??? ${prefix}pussy*
*??? ??? ${prefix}panties*
*??? ??? ${prefix}orgy*
*??? ??? ${prefix}ahegao*
*??? ??? ${prefix}ass*
*??? ??? ${prefix}bdsm*
*??? ??? ${prefix}blowjob*
*??? ??? ${prefix}cuckold*
*??? ??? ${prefix}ero*
*??? ??? ${prefix}gasm*
*??? ??? ${prefix}cum*
*??? ??? ${prefix}femdom*
*??? ??? ${prefix}foot*
*??? ??? ${prefix}gangbang*
*??? ??? ${prefix}glasses*
*??? ??? ${prefix}jahy*
*??? ??? ${prefix}trap*
*??? ??? ${prefix}blowjobgif*
*??? ??? ${prefix}spank*
*??? ??? ${prefix}hneko*
*??? ??? ${prefix}nwaifu*
*??? ???*
*????????????????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}beautifulcheck [@]*
*??? ??? ${prefix}awesomecheck [@]*
*??? ??? ${prefix}prettycheck [@]*
*??? ??? ${prefix}lesbiancheck [@]*
*??? ??? ${prefix}gaycheck [@]*
*??? ??? ${prefix}cutecheck [@]*
*??? ??? ${prefix}uglycheck [@]*
*??? ??? ${prefix}hornycheck [@]*
*??? ??? ${prefix}charactercheck [@]*
*??? ??? ${prefix}lovelycheck [@]*
*??? ??? ${prefix}couple*
*??? ??? ${prefix}mysoulmate*
*??? ??? ${prefix}hot*
*??? ??? ${prefix}sexy*
*??? ??? ${prefix}kind*
*??? ??? ${prefix}idiot*
*??? ??? ${prefix}handsome*
*??? ??? ${prefix}beautiful*
*??? ??? ${prefix}cute*
*??? ??? ${prefix}pretty*
*??? ??? ${prefix}lesbian*
*??? ??? ${prefix}noob*
*??? ??? ${prefix}bastard*
*??? ??? ${prefix}foolish*
*??? ??? ${prefix}nerd*
*??? ??? ${prefix}asshole*
*??? ??? ${prefix}gay*
*??? ??? ${prefix}smart*
*??? ??? ${prefix}stubble*
*??? ??? ${prefix}dog*
*??? ??? ${prefix}horny*
*??? ??? ${prefix}cunt*
*??? ??? ${prefix}wibu*
*??? ??? ${prefix}noobra*
*??? ??? ${prefix}nibba*
*??? ??? ${prefix}nibbi*
*??? ??? ${prefix}comrade
*??? ??? ${prefix}mumu*
*??? ??? ${prefix}rascal*
*??? ??? ${prefix}scumbag*
*??? ??? ${prefix}nuts*
*??? ??? ${prefix}fagot*
*??? ??? ${prefix}scoundrel*
*??? ??? ${prefix}ditch*
*??? ??? ${prefix}dope*
*??? ??? ${prefix}gucci*
*??? ??? ${prefix}lit*
*??? ??? ${prefix}dumbass*
*??? ??? ${prefix}crackhead*
*??? ??? ${prefix}mf*
*??? ??? ${prefix}motherfucker*
*??? ??? ${prefix}sucker*
*??? ??? ${prefix}fuckboy*
*??? ??? ${prefix}playboy*
*??? ??? ${prefix}fuckgirl*
*??? ??? ${prefix}playgirl*
*??? ???*
*????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}tictactoe [@]*
*??? ??? ${prefix}delttt*
*??? ??? ${prefix}suitpvp [@]*
*??? ???*
*????????????????????????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}translate [text]*
*??? ??? ${prefix}fliptext [text]*
*??? ??? ${prefix}toletter [num]*
*??? ???*
*????????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}setcmd*
*??? ??? ${prefix}listcmd*
*??? ??? ${prefix}delcmd*
*??? ??? ${prefix}lockcmd*
*??? ??? ${prefix}addmsg*
*??? ??? ${prefix}listmsg*
*??? ??? ${prefix}getmsg*
*??? ??? ${prefix}delmsg*
*??? ???*
*????????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}afk*
*??? ??? ${prefix}readmore*
*??? ??? ${prefix}toviewonce*
*??? ??? ${prefix}chatinfo*
*??? ??? ${prefix}alive*
*??? ??? ${prefix}script*
*??? ??? ${prefix}speedtest*
*??? ??? ${prefix}signo*
*??? ??? ${prefix}ping*
*??? ??? ${prefix}owner*
*??? ??? ${prefix}frases*
*??? ??? ${prefix}piropos*
*??? ??? ${prefix}menu*
*??? ??? ${prefix}delete*
*??? ??? ${prefix}chatinfo*
*??? ??? ${prefix}quoted*
*??? ??? ${prefix}listpc*
*??? ??? ${prefix}listgc*
*??? ??? ${prefix}donar*
*??? ??? ${prefix}solicitud*
*??? ??? ${prefix}report [bug]*
*??? ???*
*???????????????????????????*
*???????????????????????????????????????????????????*
*???????????????????????????*` + '' + ' ', `${botname}`,log0, [{"urlButton": {"displayText": "YouTube ????","url": `${websitex}`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickreplayButton": {"displayText": "Donate ????","id": 'donate'}},{"quickreplayButton": {"displayText": "Owner ????","id": 'owner'}}] )
break

case 'rpgmenu':
	   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
var unicorn = await getBuffer(picak+'Rpg Menu')
await cnf.send5ButImg(from, `?????????????????????????????? RPG ???	
*??? ??? ${prefix}hunt
*??? ??? ${prefix}mine
*??? ??? ${prefix}fish
*??? ??? ${prefix}heal
*??? ??? ${prefix}blood
*??? ??? ${prefix}stab
*??? ??? ${prefix}buy
*??? ??? ${prefix}sell
*??? ??? ${prefix}profile
*??? ??? ${prefix}inventory
*??? ??? ${prefix}leaderboard
?????????????????????????????????????????????` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube ????","url": `${websitex}`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickreplayButton": {"displayText": "Donate ????","id": 'donate'}},{"quickreplayButton": {"displayText": "Owner ????","id": 'owner'}}] )
break



/*
*???????????????????????????????????????????????????????????????????????????????????????????????????????*
*??????????????????????????????????????????????????????????????????????????*
*??????:*?????? ???????????? ??? ??? ???????? ??? ????? 
*??????:???????????????????????????? : ????????????????????*
*??????:YT : ConfuMods*
*??????:???????????????????????? : wa.me/50254371795*
*??????:*?????? ???????????? ??? ??? ?????????? ??? ??? 
*??????????????????????????????????????????????????????????????????????????*
*???????????????????????????????????????????????????????????????????????????????????????????????????????*

*????????????????????????? *???????? ????????????????* ?????????????????????????*
*??? ???*
*??? ??? Coins :*
*??? ??? ${getMonay(m.sender)}*
*??? ??? XP :*
*??? ??? ${getLevelingXp(sender)}*
*??? ??? Level :*
*??? ??? ${getLevelingLevel(sender)}*
*??? ??? Rol :*
*??? ??? ${role}*
*??? ???*
*????????????????????????? ???????? ???????? ???????????????*
*??? ???*
*??? ??? ${prefix}info*
*??? ??? ${prefix}ping*
*??? ??? ${prefix}creador*
*??? ??? ${prefix}creditos*
*??? ???*
*????????????????????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}tts*
*??? ??? ${prefix}attp*
*??? ??? ${prefix}sticker*
*??? ??? ${prefix}sticker2*
*??? ???*
*????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}ban*
*??? ??? ${prefix}simi*
*??? ??? ${prefix}play2*
*??? ??? ${prefix}besar*
*??? ??? ${prefix}claim*
*??? ??? ${prefix}patear*
*??? ??? ${prefix}husbu*
*??? ??? ${prefix}crash1*
*??? ??? ${prefix}crash2*
*??? ??? ${prefix}crash3*
*??? ??? ${prefix}crash4*
*??? ??? ${prefix}abrazar*
*??? ??? ${prefix}coinflip*
*??? ??? ${prefix}frases2*
*??? ??? ${prefix}memes*
*??? ??? ${prefix}rankfeo*
*??? ??? ${prefix}rankgay*
*??? ??? ${prefix}rollwaifu*
*??? ??? ${prefix}ranksexy*
*??? ??? ${prefix}ranklindo*
*??? ??? ${prefix}mis_waifu*
*??? ??? ${prefix}palmaditas*
*??? ???*
*????????????????????????????????*
*??? ???*
*??? ??? ${prefix}toimg*
*??? ??? ${prefix}tomp3*
*??? ??? ${prefix}wpanime*
*??? ??? ${prefix}wallpaper*
*??? ??? ${prefix}tts es texto*
*??? ???*
*????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}ice*
*??? ??? ${prefix}box*
*??? ??? ${prefix}love*
*??? ??? ${prefix}toxic*
*??? ??? ${prefix}love2*
*??? ??? ${prefix}blood*
*??? ??? ${prefix}grose*
*??? ??? ${prefix}luxury*
*??? ??? ${prefix}dance*
*??? ??? ${prefix}bokeh*
*??? ??? ${prefix}text3d*
*??? ??? ${prefix}sticker*
*??? ??? ${prefix}blood2*
*??? ??? ${prefix}warrior*
*??? ??? ${prefix}codetxt*
*??? ??? ${prefix}express*
*??? ??? ${prefix}vampire*
*??? ??? ${prefix}blackbird*
*??? ??? ${prefix}halloween*
*??? ??? ${prefix}spiderman*
*??? ??? ${prefix}matrixgoogletxt*
*??? ???*
*????????????????????????????? ???? ???????????????????????????*
*??? ???*
*??? ??? ${prefix}lb*
*??? ??? ${prefix}level*
*??? ??? ${prefix}cartera*
*??? ??? ${prefix}leveling*
*??? ??? ${prefix}trabajar*
*??? ??? ${prefix}transferir @ | cantidad*
*??? ???*
*????????????????????????????????*
*??? ???*
*??? ??? ${prefix}loli*
*??? ??? ${prefix}levi*
*??? ??? ${prefix}loli2*
*??? ??? ${prefix}yaoi*
*??? ??? ${prefix}claim*
*??? ??? ${prefix}souei*
*??? ??? ${prefix}waifu*
*??? ??? ${prefix}shion*
*??? ??? ${prefix}milim*
*??? ??? ${prefix}siesta*
*??? ??? ${prefix}husbu*
*??? ??? ${prefix}hinata*
*??? ??? ${prefix}kanna*
*??? ??? ${prefix}shuna*
*??? ??? ${prefix}rimuru*
*??? ??? ${prefix}sakura*
*??? ??? ${prefix}jeanne*
*??? ??? ${prefix}naruto*
*??? ??? ${prefix}waifu2*
*??? ??? ${prefix}sasuke*
*??? ??? ${prefix}vanitas*
*??? ??? ${prefix}shotowp*
*??? ??? ${prefix}megumin*
*??? ??? *${prefix}rollwaifu*
*??? ??? ${prefix}mis_waifus*
*??? ???*
*????????????????????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}besar @*
*??? ??? ${prefix}patear @*
*??? ??? ${prefix}abrazar @*
*??? ??? ${prefix}palmaditas @*
*??? ???*
*????????????????????????????????????*
*??? ???*
*??? ??? ${prefix}gay*
*??? ??? ${prefix}salir*
*??? ??? ${prefix}mute*
*??? ??? ${prefix}tagall*
*??? ??? ${prefix}linkgc*
*??? ??? ${prefix}tagall2*
*??? ??? ${prefix}tagall3*
*??? ??? ${prefix}tagall4*
*??? ??? ${prefix}tagall5*
*??? ??? ${prefix}kick @*
*??? ??? ${prefix}kick @*
*??? ??? ${prefix}chatlist*
*??? ??? ${prefix}unmute*
*??? ??? ${prefix}blocklist*
*??? ??? ${prefix}getpic @*
*??? ??? ${prefix}getbio @*
*??? ??? ${prefix}listadmin*
*??? ??? ${prefix}nsfw [1/0]*
*??? ??? ${prefix}promote @*
*??? ??? ${prefix}hidetag texto*
*??? ??? ${prefix}antitrava [1/0]*
*??? ??? ${prefix}welcome [1/0]*
*??? ??? ${prefix}grupo [abrir/cerrar]*
*??? ???*
*????????????????????????????*
*??? ???*
*??? ??? ${prefix}nsfw*
*??? ??? ${prefix}nfswmenu*
*??? ???*
*????????????????????????????????*
*??? ???*
*??? ??? ${prefix}gay*
*??? ??? ${prefix}reto*
*??? ??? ${prefix}slot*
*??? ??? ${prefix}lesbi*
*??? ??? ${prefix}delttt*
*??? ??? ${prefix}juego*
*??? ??? ${prefix}ruleta*
*??? ??? ${prefix}charlie*
*??? ??? ${prefix}verdad*
*??? ??? ${prefix}apostar*
*??? ??? *${prefix}rankfeo*
*??? ??? ${prefix}tictactoe*
*??? ??? *${prefix}rankgay*
*??? ??? *${prefix}ranklindo*
*??? ??? *${prefix}ranksexy*
*??? ???*
*????????????????????????????????*
*??? ???*
*??? ??? ${prefix}gay*
*??? ??? ${prefix}wame*
*??? ??? ${prefix}frases*
*??? ??? ${prefix}frases2*
*??? ??? ${prefix}piropos*
*??? ??? ${prefix}getpic @*
*??? ??? ${prefix}getbio @*
*??? ??? ${prefix}wpanime*
*??? ??? ${prefix}wallpaper*
*??? ??? ${prefix}tts es texto*
*??? ???*
*?????????
*??? ???*
*??? ??? ${prefix}ban*
*??? ??? ${prefix}salir*
*??? ??? ${prefix}block*
*??? ??? ${prefix}unblok*
*??? ??? ${prefix}crash1*
*??? ??? ${prefix}crash2*
*??? ??? ${prefix}crash3*
*??? ??? ${prefix}crash4*
*??? ??? ${prefix}clearall*
*??? ???*
*???????????????????????????*
*???????????????????????????????????????????????????*
*???????????????????????????*`      

*/

case 'ping': case 'p': case 'botstatus': case 'statusbot': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `*???? Info Internet*
> Velocidad de respuesta ${latensi.toFixed(3)} _segundos_\n\nRuntime : ${runtime(process.uptime())}
===========================||
*???? Info Ram*
> RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
===========================||`
                replay(respon)
            }
            break
            case 'speedtest': {
            	   if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
            replay('Testeando velocidad...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) replay(stdout)
        if (stderr.trim()) replay(stderr)
            }
            } 
            break
            case 'owner': case 'creator': {
                cnf.sendContact(m.chat, global.vcardowner, m)
            }
            break
  case 'setmenu': {
            	if (isBan) return replay(mess.ban)
	if (isBanChat) return replay(mess.banChat)
            if (!isCreator) return replay(mess.owner)
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = false
                replay(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                replay(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateDocument = false
                replay(mess.success)
                //} else if (args[0] === 'templateMessage'){
                /////setbot.templateImage = false
                /////setbot.templateVideo = false
                /////setbot.templateGif = false
                /////setbot.templateMsg = true
                //////setbot.templateDocument = false
                //////replay(mess.success)
                } else if (args[0] === 'templateDocument'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = true
                replay(mess.success)
                } else {
                let sections = [
                {
                title: "*[??????] CAMBIO DE MENU*",
                rows: [
                {title: "Imagen Menu", rowId: `setmenu templateImage`, description: `Toque para cambiar el men?? del bot a Men?? de imagen`},
                {title: "Gif Menu", rowId: `setmenu templateGif`, description: `Toca para cambiar el men?? del bot a Men?? GIF`},
                {title: "Video Menu", rowId: `setmenu templateVideo`, description: `Toque para cambiar el men?? del bot a Men?? de video`},
                ///////////////{title: "Text Menu", rowId: `setmenu templateMessage`, description: `Toca para cambiar el men?? del bot a Men?? de texto`},
                {title: "Documento Menu", rowId: `setmenu templateDocument`, description: `Toque para cambiar el men?? del bot a Men?? de documento`}
                ]
                },
                ]
                cnf.sendListMsg(m.chat, `*Seleccione el men?? que desea cambiar*`, ` `, cnf.user.name, `Haga clic aqu??`, sections, m)
                }
            }
            break
case 'sugerir': case 'solicitar': case 'request': {
   if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
if (!args.join(" ")) return replay(`Ejemplo : ${prefix + command} hola lucky, agregue el comando de stickers`)
teks = `*| SOLICITUD |*`
teks1 = `\n\nNumero : @${m.sender.split("@")[0]}\nSolicitud : ${args.join(" ")}`
teks2 = `\n\nEnviado correctamente al propietario`
for (let i of owner) {
cnf.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
cnf.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
                    case 'bug': case 'report': {
                    	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
                    	if(!text) return replay(`Reportar error\n\nEjemplo: ${command} Error en el men??`)
                    	cnf.sendMessage(`${owner}@s.whatsapp.net`, {text: `*Informe de error de:* wa.me/${m.sender.split("@")[0]}
Mensaje de informe: ${text}` })
replay(`Reportado con ??xito al propietario\n\nAseg??rese de que el error sea v??lido, si juega con esto, use esta funci??n una y otra vez sin motivo, ser?? bloqueado.`)
                    }
                    break
/*case 'donar': case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
	if (isBan) return replay(mess.ban)	 			
if (isBanChat) return replay(mess.banChat)
teks = `*??? Script ???*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nNo olvides donar ????`
replay(teks)
break*/


case 'wamod':
let keysxxx = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
let apikeyxx = keysxxx[Math.floor(Math.random() * keysxxx.length)]
let jsonmod = await fetchJson(`https://zenzapis.xyz/searching/wamods?query=${text}&apikey=${apikeyxx}`)
wamod = jsonmod.result
teksmod = `> Nombre: ${wamod[0].apk_name}
Link: ${wamod[0].apk_url}

> Nombre: ${wamod[1].apk_name}
> Link: ${wamod[1].apk_url}

> Nombre: ${wamod[2].apk_name}
> Link: ${wamod[2].apk_url}`
cnf.sendMessage(m.chat, { image: { url: wamod[0].apk_image }, caption: teksmod }, { quoted: m })
break
                        default:
                        
                        if (m.sender.startsWith('258' || '92' || '91' || '357' || '359' || '91' || '234' || '212' || '213' || '233' || '258' || '297' || '350' || '371' || '380' || '972')) {
if (!AntiArabe) return
cnf.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
/*                        if (m.sender.startsWith('972' || '972')) {
replay('*Antifakes activado, lo siento pero no s?? permiten n??meros fakes en este grupo.*????')
cnf.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
                        if (m.sender.startsWith('258' || '258')) {
replay('*Antifakes activado, lo siento pero no s?? permiten n??meros fakes en este grupo.*????')
cnf.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
                        if (m.sender.startsWith('258' || '258')) {
replay('*Antifakes activado, lo siento pero no s?? permiten n??meros fakes en este grupo.*????')
cnf.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
                        if (m.sender.startsWith('258' || '258')) {
replay('*Antifakes activado, lo siento pero no s?? permiten n??meros fakes en este grupo.*????')
cnf.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
                        if (m.sender.startsWith('258' || '258')) {
replay('*Antifakes activado, lo siento pero no s?? permiten n??meros fakes en este grupo.*????')
cnf.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
                        if (m.sender.startsWith('258' || '258')) {
replay('*Antifakes activado, lo siento pero no s?? permiten n??meros fakes en este grupo.*????')
cnf.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}*/
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replay(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            replay(bang)
                    }
                    try {
                        replay(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replay(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replay(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replay(evaled)
                    } catch (err) {
                        await replay(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return replay(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return console.log(err)
                        if (stdout) return replay(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
                
/* if (isCmd) {
	                        aing = `
	                        ???????????? ??? ??? *NO EXISTE* ?????? ????????????
	                        ????????? *Nombre :* *${pushname}*
	                        ????????? *Numero :* @${m.sender.split("@")[0]}
	                        ????????? *Comando :* ${command}
	                        ??????????????? ??? *ConfuBot* ???  ???????????????`
	                       replay(`${aing}`)
	                        				  }         
                */
			//anti-tag
/*const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
//anti-tag 2
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./Media/theme/yourtag.webp')
cnf.sendReadReceipt(m.chat, m.sender, [m.key.id])
cnf.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./Media/theme/yourtag.webp')
cnf.sendReadReceipt(m.chat, m.sender, [m.key.id])
cnf.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}*/
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    cnf.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        console.log(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Se actualizo ${__filename}`))
	delete require.cache[file]
	require(file)
})
