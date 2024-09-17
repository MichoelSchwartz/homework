/* globals $*/
(function () {
    let status;
    let input = document.querySelector('#loadFile');
   
    console.log(input);

    $('button').on('click', function () {
        let inputText = input.value;
        console.log(inputText);
        fetch(inputText)
            .then(r => {
                if (r.status < 400) {
                    return r.text();
                } else {
                    status = r.status;
                    console.log(r);
                    throw new Error(`${r.status} - ${r.statusText}`);
                }
            })
            .then(t => console.log(t))
            .catch(e => {
                console.error('oops', e);
                console.log(status);
            });
        } );
    }());