import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
// react component used to create charts
import ChartistGraph from 'react-chartist';
// function that returns a color based on an interval of numbers
import { scaleLinear } from "d3-scale";
// react components used to create a SVG / Vector map
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

import Card from 'components/Card/Card.js';
import StatsCard from 'components/Card/StatsCard.jsx';
import Tasks from 'components/Tasks/Tasks.jsx';
import Sheet from './Sheet';

import {
  dataPie,
  dataSales,
  optionsSales,
  responsiveSales,
  dataBar,
  optionsBar,
  responsiveBar,
  table_data
} from 'variables/Variables.jsx';

const colorScale = scaleLinear()
  .domain([0, 1, 6820])
  .range(["#E5E5E5", "#B2B2B2", "#000000"]);

class Dashboard extends Component {
  createTableData() {
    var tableRows = [];
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <div className="flag">
              <img src={table_data[i].flag} alt="us_flag" />
            </div>
          </td>
          <td>{table_data[i].country}</td>
          <td className="text-right">{table_data[i].count}</td>
          <td className="text-right">{table_data[i].percentage}</td>
        </tr>
      );
    }
    return tableRows;
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning"></i>}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh"></i>}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success"></i>}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o"></i>}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger"></i>}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o"></i>}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info"></i>}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh"></i>}
                statsIconText="Updated now"
              />
            </Col>
          </Row>

          <Row>
            <Card>
              <div id='content'>
              </div>
              <Sheet />
            </Card>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default Dashboard;
