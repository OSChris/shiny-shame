/** @jsx React.DOM */

var ListComponent =
  React.createClass({displayName: "ListComponent",
    componentDidMount:function(){
      this.renderChart(this.props.data)
    },
    shouldComponentUpdate:function(nextProps, nextState){
      return true
    },
    componentWillUpdate:function(nextProps, nextState){
      return true
    },
    componentDidUpdate:function(nextProps, nextState){
      this.clearChart(nextProps.data)
      this.renderChart(nextProps.data)
    },
    renderChart:function(dataset){
      d3.select('#chart-' + this.props.target).selectAll('div')
        .data(dataset)
        .enter()
        .append('div')
        .attr('class', 'bar')
        .style('height', function (d) {
          return d * 5 + 'px';
        })
        .style('border', function(){
          return '1px black solid'
        });
    },
    clearChart:function(newData){
      d3.select('#chart-' + this.props.target).selectAll('div')
        .data(newData)
        .remove()
    },
    render:function(){
      return (
        React.createElement("div", {className: "box"}, 
          React.createElement("h4", null, "Chart #", this.props.target+1), 
          React.createElement("div", {id: "chart-" + this.props.target})
        )
      )
    }
  });

var ReactList =
  React.createClass({displayName: "ReactList",
    render:function(){
      return (
        React.createElement("div", null, 
          this.props.data.map(function (item, index){
            return React.createElement(ListComponent, {data: item, target: index})
          })
        )
      )
    }
  });

