const links = [
    {label: "Week 1", url: "week1/review-webpage-new.html"},
    {label: "Week 2", url: "week2/index.html"},
    /*{label: "Week 2 Team Activity", url: "week2/team.html"},*/
    {label: "Week 3", url: "week3/index.html"},
    /*{label: "Week 3 Team Activity", url: "week3/wk3.html"},*/
    {label: "Week 4", url: "week4/index.html"},
    {label: "Week 5", url: "week5/index5.html"},
    {label: "Week 6: To Do Project", url: "week5/ToDo/index.html"},
    {label: "Week 7", url: "week7/index.html"},
    {label: "Week 8", url: "week8/index.html"},
    {label: "Week 9", url: "week9/index.html"},
    {label: "Week 10", url: "week10/index.html"},
    {label: "Final Project", url: "project/index.html"}
]


var list = document.createElement('ol');


for (let i = 0; i < links.length; i++) {
    let item = document.createElement('li');
    let a = document.createElement('a');

    var link = document.createTextNode(links[i].label);
    a.appendChild(link);
    a.href = links[i].url;
    item.appendChild(a);

    list.appendChild(item);

    
}
document.querySelector('div.olist').appendChild(list);