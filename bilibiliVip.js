

新版需要自己抓包找域名



#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/bt9527q/rewrite/main/bilibiliVip.js




var modifiedHeaders = $request.headers;

//modifiedHeaders['Cookie'] = '_uuid=89CA319F-644C-B230-6708-8B7379B193D325227infoc; buvid3=DC4C7FF5-97FA-43E6-B171-3CD2A525EB0749121infoc; buvid4=B791987E-7082-82A0-7C97-086E10A85FF925825-123120203-; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDE3NDc1MjUsImlhdCI6MTcwMTQ4ODI2NSwicGx0IjotMX0.HPEWh-bdFQhkVNFjdJqdzhG2DZz0vZ7CBRTW0PmNaWc; bili_ticket_expires=1701747465; Buvid=Y642A96E0247B41043F4823F4C2F4EB5E769; sid=mjaccw8n; SESSDATA=eff3fae9%2C1717040318%2Cb23642c2CjDgmr9UgL6eiAAnIT4OVSKFoI0mDZqt2f_hoHX69b6y1w2eVUjEb35r05DpW3BafGASVnZfMDYweFhZVkliUDNvR1c3bF9Zakx2OUxPbmlsS0FIVjVqS0M1dDVJZnI2T1dsb1lIa3N3NFZHWTc5UmV0THI0aWNZXzg4VFk5YkpxT2VKRTZDN3ZRIIEC; bili_jct=6c2426a18fea646ececdfb827a6cb2d3; DedeUserID=283347922; DedeUserID__ckMd5=b2e4d0dd7eafc2b1';

modifiedHeaders['Authorization'] = 'identify_v1 acf2ec56c2953294c027e8dc8d099ec2CjDgmr9UgL6eiAAnIT4OVSKFoI0mDZqt2f_hoHX69b6y1w2eVUjEb35r05DpW3BafGASVnZfMDYweFhZVkliUDNvR1c3bF9Zakx2OUxPbmlsS0FIVjVqS0M1dDVJZnI2T1dsb1lIa3N3NFZHWTc5UmV0THI0aWNZXzg4VFk5YkpxT2VKRTZDN3ZRIIEC';

modifiedHeaders['User-Agent'] = 'bili-universal/74700100 os/ios model/iPhone 13 Pro mobi_app/iphone osVer/16.0 network/2';

$done({headers : modifiedHeaders});
