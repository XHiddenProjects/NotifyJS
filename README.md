# NotifyJS
NotifyJS makes desktop notifications easier and ready to use with customization and allows interaction with the notifactions.

### How to use
Create a variable that will allow you to set up a notification
```js
let notify = new NotifyJS();
if(notify.requestPermission()){//Request for users acceptence/rejection
//successful request
}else{
//Unsuccessful request
}
```

### Title, Body, and icon
To do this you would have to declare a function that will setup your _title_, _body_, and _icon_
```js
notify.title(title='NotifyJS');//Sets a title
notify.body(txt='');//Sets the body
notify.icon(path='');//Sets the icon
```

### Extras
Here are some extra options you can do as well
```js
notify.setSilence(set=false);//Silences the notification
notify.setVibrate(set=false);//Vibrates the notification
notify.setLang(lang='en-US');//Changes the notification language
notify.setCloseTime(time=3);//Closing time for the notification(3 seconds)
```

### Events
Here are some events you can use for the notifications as well
```js
notify.click(func);//Runs a function when the notification is clicked
notify.closed(func);//Runs a function when the notification is closed
notify.error(func);//Runs a function when the notification has an error
notify.show(func);//Runs a function when the notification is showing
```

### Executing the notifications
To execute the function, you will have to push it by writting this
```js
notify.push();//Executes the notification
```

