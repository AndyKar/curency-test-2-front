import React from "react";
import logom from "../../image/molekula_red.png"
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import Menu from "../ui/nav/Menu";

function Footer(props) {
  return (
    <footer>
      <div className="footer-content-wrap theme-bg">
        <div className="container">
          <div className="footer-content">
            <div className="site-info">
              <div className="site-logo-wrap">
                <a href='/' className="header-logo">
                  <svg version="1.0" viewBox="0 0 917.000000 149.000000" preserveAspectRatio="xMidYMid meet" style={{width: "180px", maxWidth: '100%', height: 'auto'}}>
                      <g transform="translate(0.000000,149.000000) scale(0.100000,-0.100000)"
                         fill="#b7b7b8" stroke="none">
                          <path d="M10 745 l0 -735 4570 0 4570 0 0 735 0 735 -4570 0 -4570 0 0 -735z
                                                m5160 0 l0 -725 -2575 0 -2575 0 0 725 0 725 2575 0 2575 0 0 -725z m570 265
                                                c0 -104 3 -190 6 -190 3 0 106 86 229 190 l224 190 165 -2 165 -3 -219 -179
                                                c-192 -157 -218 -182 -207 -195 23 -26 430 -525 440 -538 7 -10 -23 -13 -145
                                                -13 l-154 0 -160 210 c-87 115 -162 210 -166 210 -4 0 -45 -32 -92 -71 l-86
                                                -70 0 -140 0 -139 -120 0 -120 0 0 465 0 465 120 0 120 0 0 -190z m1616 22
                                                c45 -92 147 -301 227 -465 l146 -297 -128 0 -128 0 -49 105 -49 105 -226 0
                                                -226 0 -48 -105 -48 -105 -129 0 -128 0 18 37 c10 21 110 230 222 466 l204
                                                427 130 0 131 0 81 -168z m1289 143 c135 -42 215 -183 174 -306 -29 -85 -96
                                                -139 -208 -168 l-74 -18 55 -35 c61 -40 117 -100 243 -265 l85 -113 -142 0
                                                -143 1 -80 106 c-44 59 -114 142 -155 184 -83 86 -111 99 -217 99 l-63 0 0
                                                -195 0 -195 -120 0 -120 0 0 466 0 466 353 -5 c307 -3 360 -6 412 -22z"/>
                          <path d="M670 804 c-162 -224 -312 -431 -333 -460 l-39 -54 64 0 63 0 109 150
                                                108 150 247 -2 246 -3 60 -147 60 -148 58 0 c31 0 57 1 57 3 0 2 -85 208 -188
                                                458 -115 278 -194 455 -202 457 -10 1 -126 -150 -310 -404z m355 48 c37 -90
                                                65 -165 62 -168 -2 -2 -88 -3 -190 -2 l-185 3 121 167 c67 92 122 166 123 165
                                                1 -1 32 -75 69 -165z"/>
                          <path d="M1716 1183 c-3 -16 -37 -210 -76 -433 -39 -223 -73 -417 -76 -433 -6
                                                -27 -5 -27 50 -27 50 0 56 2 61 23 2 12 30 168 60 347 31 179 57 329 58 334 2
                                                4 146 -152 322 -348 176 -196 325 -356 332 -356 14 0 9 -26 93 460 39 223 73
                                                417 76 433 6 27 5 27 -50 27 -50 0 -56 -2 -61 -22 -2 -13 -30 -169 -60 -348
                                                -31 -179 -57 -329 -58 -334 -2 -5 -147 152 -322 348 -176 196 -325 356 -331
                                                356 -7 0 -15 -12 -18 -27z"/>
                          <path d="M2916 1183 c-3 -16 -37 -210 -76 -433 -39 -223 -73 -418 -76 -434
                                                l-6 -28 288 4 c254 5 299 8 367 26 102 28 167 64 231 128 227 229 182 562 -96
                                                698 -97 48 -219 66 -450 66 l-176 0 -6 -27z m410 -74 c158 -22 264 -86 319
                                                -194 26 -52 30 -69 30 -144 0 -72 -4 -95 -27 -143 -51 -110 -148 -189 -274
                                                -224 -66 -18 -484 -34 -484 -18 0 5 28 172 62 372 l63 362 117 0 c64 0 151 -5
                                                194 -11z"/>
                          <path d="M4002 1188 c33 -51 278 -465 283 -479 5 -12 -35 -263 -61 -392 -6
                                                -27 -5 -27 50 -27 50 0 56 2 61 23 2 12 18 101 35 197 l30 175 262 262 263
                                                263 -75 0 -75 0 -205 -205 c-113 -113 -207 -205 -210 -205 -3 0 -59 92 -125
                                                205 l-120 204 -64 0 -63 1 14 -22z"/>
                          <path d="M7078 823 c-37 -81 -70 -156 -73 -165 -7 -17 4 -18 144 -18 l150 0
                                                -53 113 c-29 61 -63 136 -77 165 l-24 54 -67 -149z"/>
                          <path d="M8120 930 l0 -112 194 3 c179 4 197 6 223 25 45 33 59 66 48 110 -7
                                                28 -20 44 -45 59 -31 18 -55 20 -227 23 l-193 4 0 -112z"/>
                      </g>
                  </svg>
                </a>
              </div>
            </div>
            {props.footer.data_menu
              ? <div className="site-menu footer-menu-wrap">
                  <Menu
                      categories = {props.footer.data_menu.categories}
                  />
              </div>
              : null
            }
            {props.footer.footer_contacts
                ? <div className="footer-contacts-wrap">
                    <div className="footer-contacts">
                        <div className="social-contact">
                            <svg className="social-icon-svg" width="15" height="12" viewBox="0 0 15 12"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 9.37661C15 9.7055 14.9065 10.0118 14.7582 10.2794L10.0247 4.9785L14.7098 0.880266C14.8936 1.17046 15.0032 1.50903 15.0032 1.87661L15 9.37661ZM7.5 5.93938L14.0198 0.235383C13.7521 0.0902838 13.4523 0 13.1266 0H1.87661C1.55095 0 1.24785 0.0902838 0.983448 0.235383L7.5 5.93938ZM9.31857 5.59437L7.80954 6.91638C7.72249 6.99377 7.61286 7.03246 7.5 7.03246C7.39037 7.03246 7.28074 6.99377 7.19046 6.91638L5.68143 5.59437L0.886715 10.963C1.17369 11.1436 1.51225 11.25 1.87661 11.25H13.1266C13.491 11.25 13.8295 11.1404 14.1165 10.963L9.31857 5.59437ZM0.293422 0.880266C0.10963 1.16724 0 1.50903 0 1.87661V9.37661C0 9.7055 0.0935082 10.0118 0.241831 10.2794L4.9785 4.9785L0.293422 0.880266Z"/>
                            </svg>
                            <span className="social-name">Email:</span>
                            <a className="social-value footer-email" href={ "mailto:" + props.footer.email }>{ props.footer.footer_contacts.email }</a>
                        </div>
                    </div>
                  </div>
                : null
            }
            <div className="footer-buttons">
                <span className="footer-button button-up theme-border-button">
                    <svg width="25" height="15" viewBox="0 0 25 15" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.9904 12.7325C23.9904 12.4543 23.8874 12.1965 23.6846 11.9937L13.2389 1.54799C12.8312 1.14029 12.169 1.14029 11.7613 1.54799L1.31555 11.9937C0.907838 12.4014 0.907839 13.0636 1.31555 13.4713C1.72326 13.879 2.38542 13.879 2.79313 13.4713L12.5001 3.76437L22.207 13.4713C22.6147 13.879 23.2769 13.879 23.6846 13.4713C23.8874 13.2685 23.9904 13.0108 23.9904 12.7325Z"
                            strokeWidth="0.5"/>
                    </svg>
                </span>
            </div>
          </div>
        </div>
      </div>

    {/*//   <Container fluid>*/}
    {/*//     <Nav>*/}
    {/*//       <NavItem>*/}
    {/*//         <NavLink href="https://www.creative-tim.com/?ref=bdr-user-archive-footer">*/}
    {/*//           Creative Tim*/}
    {/*//         </NavLink>*/}
    {/*//       </NavItem>*/}
    {/*//       <NavItem>*/}
    {/*//         <NavLink href="https://www.creative-tim.com/presentation?ref=bdr-user-archive-footer">*/}
    {/*//           About Us*/}
    {/*//         </NavLink>*/}
    {/*//       </NavItem>*/}
    {/*//       <NavItem>*/}
    {/*//         <NavLink href="https://www.creative-tim.com/blog?ref=bdr-user-archive-footer">*/}
    {/*//           Blog*/}
    {/*//         </NavLink>*/}
    {/*//       </NavItem>*/}
    {/*//     </Nav>*/}
    {/*//     <div className="copyright">*/}
    {/*//       © {new Date().getFullYear()} made with{" "}*/}
    {/*//       <i className="tim-icons icon-heart-2" /> by{" "}*/}
    {/*//       <a*/}
    {/*//         href="https://www.creative-tim.com/?ref=bdr-user-archive-footer"*/}
    {/*//         target="_blank"*/}
    {/*//       >*/}
    {/*//         Creative Tim*/}
    {/*//       </a>{" "}*/}
    {/*//       for a better web.*/}
    {/*//     </div>*/}
    {/*//   </Container>*/}
    </footer>
  )
}

export default Footer;
