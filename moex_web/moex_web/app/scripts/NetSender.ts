export class NetSender {
   static get(url: string,
        done: (result:string)=>void,
        fail: ()=>void = null,
        always: ()=>void = null){
        const request = $.ajax({
            type: "GET",
            url: url,
            data: {},
            contentType: 'application/json'
        });
        this.fireAfterEvents(request, done, fail, always);
    }
    static post(url: string, value: object, 
         done: (result:string)=>void,
         fail: ()=>void = null,
         always: ()=>void = null){
       const request = $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(value),
            contentType: 'application/json'
        });
       this.fireAfterEvents(request, done, fail, always);  
    }
    
    private static fireAfterEvents(request: JQuery.jqXHR<any>,
                            done: (result:string)=>void,
                            fail: ()=>void = null,
                            always: ()=>void = null){
        request.done(result => {
            done(result);
        });
        if(fail != null){
            request.fail((err) => {
                fail();
            });
        }
        if(always != null){
            request.always((err) => {
                always();
            });
        }

    }
}