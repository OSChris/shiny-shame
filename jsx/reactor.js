/** @jsx React.DOM */

var ListComponent =
  React.createClass({
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
        <div className="box">
          <h4>Chart #{this.props.target+1}</h4>
          <div id={"chart-" + this.props.target}></div>
        </div>
      )
    }
  });

var ReactList =
  React.createClass({
    render:function(){
      return (
        <div>
          {this.props.data.map(function (item, index){
            return <ListComponent data={item} target={index} />
          })}
        </div>
      )
    }
  });

