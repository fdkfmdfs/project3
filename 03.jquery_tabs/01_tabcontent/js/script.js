$('.tab-set').each(function(){
    let topDiv=$(this);
    let anchors=topDiv.find('ul.tabs a');
    
    let pannelDivs=topDiv.find('div.panel')
    
    let lastAnchor;
    let lastpannel;

    lastAnchor = anchors.filter('.on')
    lastpannel=$(lastAnchor.attr('href'))

    pannelDivs.hide()
    lastpannel.show()

    anchors.click(function(e){
        e.preventDefault();
        let currentAncfor=$(this);
        let currentpannel=$(currentAncfor.attr('href'))
        
        lastAnchor.removeClass('on')
        currentAncfor.addClass('on')

        lastpannel.hide();
        currentpannel.show();
        lastAnchor=currentAncfor;
        lastpannel=currentpannel         


        
    })
});