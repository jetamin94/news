import React, { Component } from 'react';

class Card extends Component{
    renderClose() {

        if (this.props.closeClick) {
            return <div className="pull-right" onClick={this.props.closeClick}>
                &times;
            </div>
        }

        return null;
    }
    render(){
        return (
            <div className={"card"
                + (this.props.hidden ? " card-hidden":"")
                + (this.props.calendar ? " card-calendar":"")
                + (this.props.plain ? " card-plain":"")
                + (this.props.wizard ? " card-wizard":"")}>
                {
                    (this.props.title !== undefined) || (this.props.category !== undefined) ?
                    (
                        <div className={"header" + (this.props.textCenter ? " text-center":"")}>
                            <h4 className="title">{this.props.title}</h4>
                            <p className="category">{this.props.category}</p>
                        </div>
                    ):""
                }
                <div className={"content"
                    + (this.props.ctAllIcons ? " all-icons":"")
                    + (this.props.ctFullWidth ? " content-full-width":"")
                    + (this.props.ctTextCenter ? " text-center":"")
                    + (this.props.tableFullWidth ? " table-full-width":"")}>
                    {this.props.children}
                </div>
                { (this.props.footer !== undefined) ? (
                    <div className={"footer"
                        + ( this.props.ftTextCenter ? " text-center":"" )}>
                        {this.props.footer}
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Card;
