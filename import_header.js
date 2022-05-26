const nav=()=>{
    return `
    <nav>
    <div id="navFirstChild">
         <img onclick='changelocation()' src='https://tse4.mm.bing.net/th?id=OIP.MJHKIyQFtgiaKLLHXtzbPwHaCA&pid=Api&P=0&w=252&h=68' alt="Zostel Logo">
    </div>
    <div id="navSecondChild">
      <ul>
          <li onclick='changedestlocation()' >Destination</li>
          <li onclick="normalshow1()">Zostel <p style="display: inline-block;" id="normaltoggle1">^</p>
          <div class="submenue" id="normalsubmenue1" >
              <div>
                  <ul>
                      <li  onclick=("setdata()") class = "city" >Zostel Aurangabad</li>
                      <li  class = "city" >Zostel Bangalore</li>
                      <li  class = "city" >Zostel Barot (Rajghnda)</li>
                      <li  class = "city" >Zostel Chitkul</li>
                      <li  class = "city" >Zostel Coorg</li>
                      <li  class = "city" >Zostel Dalhousie</li>
                      <li  class = "city" >Zostel Delhi</li>
                      <li  class = "city" >Zostel Dovie</li>
                      <li  class = "city" >Zostel Gangtok</li>
                      <li  class = "city" >Zostel Gokarna</li>
                      <li  class = "city" >Zostel Jaipur</li>
                      <li  class = "city" >Zostel Jaisalmer</li>
                      <li  class = "city" >Zostel jodhpur</li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li  class = "city" >Zostel Kathmandu</li>
                      <li  class = "city" >Zostel Kochi</li>
                      <li  class = "city" >Zostel Kodaikanal</li>
                      <li  class = "city" >Zostel Kolad</li>
                      <li  class = "city" >Zostel Leh</li>
                      <li  class = "city" >Zostel Manali</li>
                      <li  class = "city" >Zostel Mcleodganj</li>
                      <li  class = "city" >Zostel Mukteshwar</li>
                      <li  class = "city" >Zostel Mumbai</li>
                      <li  class = "city" >Zostel Munnar</li>
                      <li  class = "city" >Zostel Mysore</li>
                      <li  class = "city" >Zostel Ooty</li>
                      <li  class = "city" >Zostel Pokhara</li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li  class = "city" >Zostel Pushkar</li>
                      <li  class = "city" >Zostel Rushikesh(Tapovan)</li>
                      <li  class = "city" >Zostel Sangala</li>
                      <li  class = "city" >Zostel Shangarh</li>
                      <li  class = "city" >Zostel Sissu</li>
                      <li  class = "city" >Zostel Spiti</li>
                      <li  class = "city" >Zostel Shrinagar</li>
                      <li  class = "city" >Zostel Udaipur</li>
                      <li  class = "city" >Zostel Vagamon</li>
                      <li  class = "city" >Zostel Varkala</li>
                      <li  class = "city" >Zostel Vashisht</li>
                      <li  class = "city" >Zostel Wayanand</li>
                  </ul>
              </div>
          </div>
          
          </li>
          <li onclick="normalshow2()">Zostel Homes <p style="display: inline-block;" id="normaltoggle2">^</p>
              <div class="submenue" id="normalsubmenue2">
                  <div>
                      <ul>
                          <li  class = "city" >Zostel Homes Burwa</li>
                          <li  class = "city" >Zostel Homes Cheog</li>
                          <li  class = "city" >Zostel Homes Coorg</li>
                          <li  class = "city" >Zostel Homes Kibber</li>
                          <li  class = "city" >Zostel Homes Kotgadh</li>
                          <li  class = "city" >Zostel Homes Kotkhai</li>
                          <li  class = "city" >Zostel Homes Laida</li>
                          <li  class = "city" >Zostel Homes Mashobra</li>
                          <li  class = "city" >Zostel Homes Pushkar</li>
                          <li  class = "city" >Zostel Homes Rakhcham</li>
                          <li  class = "city" >Zostel Homes Ramgadh(Nainital)</li>
                          <li  class = "city" >Zostel Homes Rashil</li>
                          <li  class = "city" >Zostel Homes Rumshu</li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                          <li  class = "city" >Zostel Homes Tabo</li>
                          <li  class = "city" >Zostel Homes Theog</li>
                          <li  class = "city" >Zostel Homes Wayanand(Karpujha)</li>
                          <li  class = "city" >Zostel Homes Wayanand(Thirunelli)</li>
                          <li  class = "city" >Zostel Homes Wayanand(Vythri)</li>
                      </ul>
                  </div>
              </div>
          </li>
          <li onclick="normalshow3()">Zostel Plus <p style="display: inline-block;" id="normaltoggle3">^</p>
              <div class="submenue" id="normalsubmenue3">
                  <div>
                      <ul>
                          <li  class = "city" >Zostel Plus Bir</li>
                          <li  class = "city" >Zostel Plus Lonavla</li>
                          <li  class = "city" >Zostel Plus Mussoorie</li>
                          <li  class = "city" >Zostel Plus Panchgani</li>
                      </ul>
                  </div>
              </div>
          </li>
          <li onclick='changeLongstayslocation()'>Longstays</li>
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


// style='text-decoration:none;
// <a href='./Main.html' >