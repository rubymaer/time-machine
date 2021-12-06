var slider = document.getElementById("slider")
setInterval(function(){
	var val1 = 70+1*slider.value
    var val2 = 220-1*(slider.value/2)
    var val3 = 250-1*slider.value
	document.getElementById("background").style.background = "rgb("+val1+","+val2+","+val3+")"
})

// "rgb(70+"+val+",220-("+val+"/2),250-"+val+")"