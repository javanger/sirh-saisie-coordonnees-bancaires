const url = 'http://127.0.0.1:8080/api/collaborateurs';    
window.addEventListener('DOMContentLoaded',function(){
    const req = new XMLHttpRequest();
    req.onreadystatechange = function(event) {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {

                var tabUsers = JSON.parse(this.responseText);

                var chaine = '';
                tabUsers.forEach(element => {
                    chaine +='</tr><tr>';
                    chaine +='<td>' + element.matricule + '</td>';
                    chaine +='<td>' + element.nom + '</td>';
                    chaine +='<td>' + element.prenom + '</td>';
                });
                document.getElementById('affichage').innerHTML = chaine;
            } else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    };
    req.open('GET', url, true);
    req.send(null);
});