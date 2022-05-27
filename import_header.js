const nav=()=>{
    return `
    <nav>
    <div id="navFirstChild">
        <img src='https://tse4.mm.bing.net/th?id=OIP.MJHKIyQFtgiaKLLHXtzbPwHaCA&pid=Api&P=0&w=252&h=68' alt="Zostel Logo">
    </div>
    <div id="navSecondChild">
      <ul>
          <li>Destination</li>
          <li onclick="normalshow1()">Zostel <p style="display: inline-block;" id="normaltoggle1">^</p>
          <div class="submenue" id="normalsubmenue1" >
              <div>
                  <ul>
                      <li class = "city" >Zostel Aurangabad</li>
                      <li>Zostel Bangalore</li>
                      <li>Zostel Barot (Rajghnda)</li>
                      <li>Zostel Chitkul</li>
                      <li>Zostel Coorg</li>
                      <li>Zostel Dalhousie</li>
                      <li>Zostel Delhi</li>
                      <li>Zostel Dovie</li>
                      <li>Zostel Gangtok</li>
                      <li>Zostel Gokarna</li>
                      <li>Zostel Jaipur</li>
                      <li>Zostel Jaisalmer</li>
                      <li>Zostel jodhpur</li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li>Zostel Kathmandu</li>
                      <li>Zostel Kochi</li>
                      <li>Zostel Kodaikanal</li>
                      <li>Zostel Kolad</li>
                      <li>Zostel Leh</li>
                      <li>Zostel Manali</li>
                      <li>Zostel Mcleodganj</li>
                      <li>Zostel Mukteshwar</li>
                      <li>Zostel Mumbai</li>
                      <li>Zostel Munnar</li>
                      <li>Zostel Mysore</li>
                      <li>Zostel Ooty</li>
                      <li>Zostel Pokhara</li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li>Zostel Pushkar</li>
                      <li>Zostel Rushikesh(Tapovan)</li>
                      <li>Zostel Sangala</li>
                      <li>Zostel Shangarh</li>
                      <li>Zostel Sissu</li>
                      <li>Zostel Spiti</li>
                      <li>Zostel Shrinagar</li>
                      <li>Zostel Udaipur</li>
                      <li>Zostel Vagamon</li>
                      <li>Zostel Varkala</li>
                      <li>Zostel Vashisht</li>
                      <li>Zostel Wayanand</li>
                  </ul>
              </div>
          </div>
          
          </li>
          <li onclick="normalshow2()">Zostel Homes <p style="display: inline-block;" id="normaltoggle2">^</p>
              <div class="submenue" id="normalsubmenue2">
                  <div>
                      <ul>
                          <li>Zostel Homes Burwa</li>
                          <li>Zostel Homes Cheog</li>
                          <li>Zostel Homes Coorg</li>
                          <li>Zostel Homes Kibber</li>
                          <li>Zostel Homes Kotgadh</li>
                          <li>Zostel Homes Kotkhai</li>
                          <li>Zostel Homes Laida</li>
                          <li>Zostel Homes Mashobra</li>
                          <li>Zostel Homes Pushkar</li>
                          <li>Zostel Homes Rakhcham</li>
                          <li>Zostel Homes Ramgadh(Nainital)</li>
                          <li>Zostel Homes Rashil</li>
                          <li>Zostel Homes Rumshu</li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                          <li>Zostel Homes Tabo</li>
                          <li>Zostel Homes Theog</li>
                          <li>Zostel Homes Wayanand(Karpujha)</li>
                          <li>Zostel Homes Wayanand(Thirunelli)</li>
                          <li>Zostel Homes Wayanand(Vythri)</li>
                      </ul>
                  </div>
              </div>
          </li>
          <li onclick="normalshow3()">Zostel Plus <p style="display: inline-block;" id="normaltoggle3">^</p>
              <div class="submenue" id="normalsubmenue3">
                  <div>
                      <ul>
                          <li>Zostel Plus Bir</li>
                          <li>Zostel Plus Lonavla</li>
                          <li>Zostel Plus Mussoorie</li>
                          <li>Zostel Plus Panchgani</li>
                      </ul>
                  </div>
              </div>
          </li>
          <li>Longstays</li>
          <li>Franchise</li>
          <li onclick="normalshow4()">Join us <p style="display: inline-block;" id="normaltoggle4">^</p>
              <div class="submenue" id="normalsubmenue4">
                  <div>
                      <ul>
                          <li>Career</li>
                          <li>Zostel Internship 2022</li>
                      </ul>
                  </div>
              </div></li>
          <li>Blog</li>
          <li style="border:1px solid red; padding:1.5vh 2vh;border-radius:10px;font-size: 1.2vw;background-color: white;"><p style="color:rgb(230,90,39);display:inline-block;font-size: 1vw;"> \z/</p><pre style="display:inline-block ;">  Zo World</pre></li>
      </ul>
    </div>
 </nav>`
}



export default nav