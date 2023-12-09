class NotifyJS{
    constructor(){
        if(("Notification" in window)){
            this.title = '';
            this.body = '';
            this.icon = '';
            this.silent = false;
            this.vibrate = [200,100,200];
            this.renotify=false;
            this.timeOut = 3000;
            this.granted = false;
            this.lang = 'en-US';
            this.click;
            this.close;
            this.error;
            this.show;
        }else{
            console.error('Notification is not avaliable on your platform!');
        }
    }
    requestPermission(){
        let permission = Notification.requestPermission();
        this.granted = permission === 'granted' ? true : false;
    }
    getPermission(){
        return Notification.permission;
    }
    setTitle(title='NotifyJS'){
        if(typeof title==='string'){
            this.title = title;
        }else{
            console.error('title[0] must be a string!');
        }
    }
    setBody(txt=''){
        if(typeof txt==='string'){
            this.body = txt;
        }else{
            console.error('body[0] must be a string!');
        }
    }
    setIcon(path=''){
        if(typeof path==='string'){
            this.icon = path;
        }else{
            console.error('icon[0] must be a string!');
        }
    }
    setSilence(set=false){
        if(typeof set==='boolean'){
            this.silent = set;
        }else{
            console.error('setSilence[0] must be a boolean!');
        }
    }
    setVibrate(start1=200,stop=100,start2=200){
        if(typeof start1==='number'||typeof stop==='number'||typeof start2==='number'){
            this.vibrate = [start1, stop, start2];
        }else{
            console.error('setVibrate[0], setVibrate[1], and setVibrate[2] must be a number!');
        }
    }
    setLang(lang='en-US'){
        if(typeof lang==='string'){
            this.lang = lang;
        }else{
            console.error('setLang[0] must be a string!');
        }
    }
    setCloseTime(time=3){
        if(typeof time==='number'){
            this.timeOut = parseInt(time+'000');
        }else{
            console.error('setCloseTime[0] must be a integer!');
        }
    }
    click(func){
        if(typeof func==='function'){
            this.click = func;
        }else{
            console.error('click[0] must be a function!');
        }
    }
    closed(func){
        if(typeof func==='function'){
            this.close = func;
        }else{
            console.error('closed[0] must be a function!');
        }
    }
    error(func){
        if(typeof func==='function'){
            this.error = func;
        }else{
            console.error('error[0] must be a function!');
        }
    }
    showed(func){
        if(typeof func==='function'){
            this.show = func;
        }else{
            console.error('showed[0] must be a function!');
        }
    }
    push(){
        if(this.silent){
            const options = {
                body: this.body,
                icon: this.icon,
                silent: this.silent,
                lang: this.lang,
                renotify: this.renotify
            };
        }else{
            const options = {
                body: this.body,
                icon: this.icon,
                vibrate: this.vibrate,
                lang: this.lang,
                renotify: this.renotify
            };
        }
        
        const setNotifier = new Notification(this.title, options);

        if(typeof this.click!=='undefined') setNotifier.addEventListener('click', this.click);
        if(typeof this.close!=='undefined') setNotifier.addEventListener('close', this.close);
        if(typeof this.error!=='undefined') setNotifier.addEventListener('error', this.error);
        if(typeof this.show!=='undefined') setNotifier.addEventListener('show', this.show);
        

        if(this.timeOut>0){
            setTimeout(()=>{
                setNotifier.close();
            }, this.timeOut);
        }
    }
}
