import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          <div class="">
            <footer >
              
              <div class="container-fluid">
                <p class="text-center">
                  © 2018{" "}
                  <a
                    href=""
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    All rights Reserved{" "}
                  </a>
                  Crafted by <i class="ft-heart font-small-3"></i>
                  <a
                    href=""
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    Sathish
                  </a>
                </p>
              </div>
            </footer>
          </div>
        );
    }
}

export default Footer;