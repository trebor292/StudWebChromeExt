window.onload = function() {

    var dict = {"A<":6, "B<":5, "C<":4, "D<":3, "E<":2, "Ik":1, "Fa":1, "La":1, "No":1,"Ma":1, "Be":0, "Gr":0, "Pa":0, "7,5":7.5, "7.5":7.5, "15<":15, "10<":10, "30<":30,}
    grade = document.getElementsByClassName("infoLinje")
    value = document.getElementsByClassName("col7Studiepoeng textAlignRight")
    test = document.documentElement.innerHTML.replace(/(\r\n\t|\n|\r\t|\t| )/gm,"")
                
    test = test.split("</a><divclass=\"infoLinje\"><spanclass=\"\">")
    test.shift()
    var gradelist = []
    var valuelist = []
for (var i = 0; i < test.length; i++){
    if(test[i].includes("</span></div></td><tdclass=\"col7StudiepoengtextAlignRight\"><spanclass=\"ui-column-title\">Studiepoeng</span><spanclass=\"\">")){
        if(dict[test[i].slice(0,2)] !== 0){
        gradelist.push(dict[test[i].slice(0,2)])
        valuelist.push(dict[test[i].split("</span></div></td><tdclass=\"col7StudiepoengtextAlignRight\"><spanclass=\"ui-column-title\">Studiepoeng</span><spanclass=\"\">")[1].slice(0,3)])
        }
    }
    else if(test[i].includes("</span></div></td><tdclass=\"col7StudiepoengtextAlignRight\"><spanclass=\"ui-column-title\">Credits</span><spanclass=\"\">")){
        if(dict[test[i].slice(0,2)] !== 0){
        gradelist.push(dict[test[i].slice(0,2)])
        valuelist.push(dict[test[i].split("</span></div></td><tdclass=\"col7StudiepoengtextAlignRight\"><spanclass=\"ui-column-title\">Credits</span><spanclass=\"\">")[1].slice(0,3)])
        }    
    }
}

document.getElementsByClassName('sumStudiepoeng')[0].innerHTML = (gradelist.reduce(function(r,a,i){return r+a*valuelist[i]},0)/valuelist.reduce((a, b) => a + b, 0)).toFixed(4)
    }
