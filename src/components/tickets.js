import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import "./tickets.css";

import sessionManager from '../commons/session-manager';

class App extends Component {
  componentDidMount() {
    if (!sessionManager.isLoggedIn()) {
      console.log('User not logged in', 'Redirecting . . .');
      window.location.href = '/login';
    }
  }

  render() {
    return (
      <div className="Tickets">
        <Header />
        <div className="container" style={{ marginTop: "100px" }}>
          <h1>2019 World Table Tennis Championships Budapest</h1>
        </div>
        {/* end of container */}
        <div className="tableBanner" style={{ backgroundColor: "black", color: "white", fontSize: "2em", fontFamily: "sans-serif" }}>
          <span>Tickets</span>
        </div>
        {/* end of tableBanner */}
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Ticket Type</th>
              <th>Buy Tickets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>April 21st</td>
              <td><strong>First Day</strong>
                <p>10:00 - 11:00 Mixed Qualification Round 1</p>
                <p>11:30 - 15:15 Men's and Women's Individual Qualification Round 1</p>
                <p>5:30 - 16:00 Mixed qualifier round 2 </p>
                <p>16:15 - 20:00 Men's and Women's Individual Qualifying Round 2</p>

              </td>
              <td><button>Ticket Purchase</button>
              </td>
            </tr>
            <tr>
              <td>April 22nd</td>
              <td><strong>Second Day</strong>
                <p>10:00 - 10:30 Men's doubles qualifying round 1 </p>
                <p>10:30 - 11:00 Men's and Women's Evening Qualification Round 1</p>
                <p>11:15 - 15:00 Men's and Women's Individual Qualification Round 3</p>
                <p>15:15 - 16:15 Men's and Women's Evening Qualifying Round 2</p>
                <p>16:45 - 17:30 Men's single play on the main board </p>
                <p>18:00 - 18:45 Mixed couple for 32</p>
                <p>19:00 - 20:30 Men's and Women's Doubles for 32  </p>
                <p>20:45 - 21:30 A pair for the 16th</p>

              </td>
              <td><button>Ticket Purchase</button></td>
            </tr>
            <tr>
              <td>April 23rd</td>
              <td><strong>Third Day</strong>
                <p>10:00 - 13:20 Some women to get to 64</p>
                <p>13:20 - 16:40 A man for getting to 64</p>
                <p>16:40 - 17:25 Women's pair for the 16th</p>
                <p>17:25 - 18:10 Men's doubles for the 16th</p>
                <p>18:10 - 19:50 Some women get between the 32s</p>
                <p>19:50 - 21:30 Man for getting between 32</p>
              </td>
              <td><button>Ticket Purchase</button></td>
            </tr>
            <tr>
              <td>April 24th</td>
              <td><strong>Fourth Day</strong>
                <p>11:00 am - 1:00 pm Women to get between 16 and 16</p>
                <p>13:00 - 15:00 Man for the 16 between the men </p>
                <p>16:00 - 18:00 Men for the 16 between</p>
                <p>18:00 - 18:45 Women's doubles eight final </p>
                <p>18:45 - 19:45 Men's doubles eight final</p>
                <p>19:45 - 20:30 Mixed Quarterfinals </p>
                <p>20:30 - 22:30 Women's One Eight Final</p>
              </td>
              <td><button>Ticket Purchase</button></td>
            </tr>
          </tbody>
        </table>
        <Footer />
      </div>
    );
  }
}

export default App;
