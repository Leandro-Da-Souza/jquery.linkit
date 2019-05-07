/*
    name: LinkIt
    author: Leandro Da Souza
    version: 0.1.0
    license: MIT
*/

(function($){
    $.fn.linkIt = function(options){
        // default settings
        let settings = $.extend({
            href        :null,
            text        :null,
            target      :'_self'
        },options);

        // validation
        if(settings.href == null){
            console.log('You need an href option for LinkIt to work');
            return this;
        }

        return this.each(function(){
            let object = $(this);

            if(settings.text == null){
                settings.text = object.text();
            }

            object.wrap(`
                <a target=${settings.target} href=${settings.href}></a>
            `).text(settings.text);
        });

    };
}(jQuery));