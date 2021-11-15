export default {
    port: 3200,
    dbUri: 'mongodb://localhost:27017/SportEventsOrganizer',
    saltWorkFactor: 10,
    accessTokenTtl: '1h',
    refreshTokenTtl:'1y',
    privateKey:`-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQC6sHHigoDMP7ZxqB8Eklp0oILksYxLFILdfePEPsgYyrd/5njR
    2okEUbrfN+TXF2u/yP5NtaiDKxYEErC1O942H+K0RDe66QE536T2xup30ULT1Xrb
    saqMMpuPX+wwrcxn6j1w0BcyXXbZag6Ry3mUq3wi3UoqC2M22b6p1py3eQIDAQAB
    AoGAcPBTRSOMBYQ5vBJoCVz8ifecl/ttEvKqpJIHG26boJvqXN6xksqw/0LuWSG4
    OAM8NP7EEYDnG8sR+47PBiTcrTsRGAuY42GHDrIoLXjNIWlfkL/p1EB3m7952o0R
    HVrRMWrggNF4oNcCGZdoGCretS8yk3wZuhCEG6TUrrTVwLECQQDf7+3AcyGFT7MF
    7QFmqzdRqT8i+1P/xxHeXdmt78tXj62T5o7rSYQbOlquyMKKPoYa19n7GgVLkdaX
    Fw/Xj6PNAkEA1Ws/xbuhbPnMXxT5Rq+7MNZ50fjjUvIt04EZ4d+BLGEoGwNdALUn
    spNF5NacNMT/P+lgYEqkVnOjkybb110OXQJAYzi90V2x5o2Ptvpyenk2g5pH/Un6
    yAP+aNaQkr8DDAL/V976SEpEnIPYlkUh3XsilFY7oUTAP+GYgU2YmVxtqQJBAJ79
    igHNmSGtKpJ+9oGxctucPB6vsvJdFsSlPdnmfr3IF2+gXs2jJ1LComQreS1awOkk
    /DZgBPOerHJ4lXhoi8UCQQC+Bexk/mYu5CkZrHfUEarfc2cp+GHmrRLHU9qg5Z1c
    OLsbfkVDduzpoiYR/c4vdyw34puvAHZkqP6cS8YG1pp9
    -----END RSA PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6sHHigoDMP7ZxqB8Eklp0oILk
    sYxLFILdfePEPsgYyrd/5njR2okEUbrfN+TXF2u/yP5NtaiDKxYEErC1O942H+K0
    RDe66QE536T2xup30ULT1XrbsaqMMpuPX+wwrcxn6j1w0BcyXXbZag6Ry3mUq3wi
    3UoqC2M22b6p1py3eQIDAQAB
    -----END PUBLIC KEY-----`
};