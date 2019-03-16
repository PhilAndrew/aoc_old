import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';

export default class NgoCase extends React.PureComponent {
  render() {
    console.log('hi');
    const { title, details, image } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="border ngo-case">
            <div className="ngo-case-top-header">
              <a href="#" className="case-title">
                {title}
              </a>
              <a href="#" className="float-right">
                <img alt="" src={image} />
              </a>
            </div>
            <div class="case-description">
              <p>{details}</p>
            </div>

            <div className="buttons">
              <button className="" type="submit">Details</button>
              <button className="" type="submit">Remove</button>
            </div>
            <div>
              <div className="tagcloud03">
                <ul>
                  <li>
                    <a href="#">
                      Immigration
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lorem ipsum dolor sit amet
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}