const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')


app.use(cors())
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('aman')
})



app.post('/data-ku',(req,res)=>{
    const datanya = JSON.stringify(req.body)
    res.send({success: 'kamu berhasil hore'})
    const aftDat = JSON.parse(datanya)
    const skl = aftDat.Skill
    const iWant = ["HTML5","HTML","CSS","CSS 3","JavaScript","jQuery","Bootstrap","React"]
    const mySkl = skl.some(el=>iWant.includes(el))
    const nonSkl = ["WordPress","Divi","Elementor","WooCommerce","WordPress Development", "WordPress Plugin","Hugo","Bubble.io"]
    const resultSkill = skl.some(el => nonSkl.includes(el))   
    if(aftDat.paymentnya === 'Payment verified'){
        if(aftDat.negara !== 'Israel'){
            if(aftDat.spendnya !== "$0"){
                if(!resultSkill && mySkl){

                    fs.writeFileSync('data.json', JSON.stringify(req.body))

                }}}}else{console.log('tidak verified')}
            })


const dataku = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const dataKirim = JSON.parse(fs.readFileSync('siapKirim.json', 'utf-8'))


app.listen(3001, ()=>{
    hariChange()
})
if(dataku.judul === dataKirim.judul){
    console.log('sama')
}else{
    console.log('beda')
    risetData(riset)
    sebutHari2(harinya)
    program(riset,harinya,dataku)
    return false
}

async function program(rst,hrn,dtk){
    const pythonExec = await spawn("python3",["ular-linux.py"])
    pythonExec.on('exit',(code,signal)=>{
        console.log('python1  sudah berjalan')
        fs.writeFileSync('riset/riset-jam.json', JSON.stringify(rst))
        fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hrn))
        fs.writeFileSync('siapKirim.json', JSON.stringify(dtk))
    })
}