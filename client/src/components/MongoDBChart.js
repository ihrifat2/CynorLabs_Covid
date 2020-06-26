import React from 'react';

function MongoDBChart(props) {
    const iframe = '<iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-covid-fwiyg/embed/charts?id=c834e29c-ba23-4fe6-8258-9c014fa86f96&autoRefresh=60&theme=light"></iframe>'

    const Iframe = () => {
        return (<div dangerouslySetInnerHTML={ {__html: iframe?iframe:""}} />);
    }
    return (
        <div>
            <Iframe iframe={iframe} />
        </div>
    );
}

export default MongoDBChart;