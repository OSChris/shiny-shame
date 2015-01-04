/** @jsx React.DOM */

var ListComponent =
  React.createClass({
    componentWillMount:function(){
      this.renderChart(this.props.data)
    },
    renderChart:function(dataset){
      d3.select('#chart-' + this.props.target).selectAll('div')
        .data(dataset)
        .enter()
        .append('div')
        .attr('class', 'bar')
        .style('height', function (d) {
          return d.val * 5 + 'px';
        });
    },
    render:function(){
      return <div id={"chart-" + this.props.target}></div>
    }
  });
var ReactList =
  React.createClass({
    render:function(){
      var listItems = this.props.items
      var rows = listItems.map(function(item, index){
        return <ListComponent data={item} target={index} />
      })

      return(
        <div>{rows}</div>
      )
    }
  });
