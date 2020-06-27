import React from 'react';

function Monthly(props) {
    const iframe = '<iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-covid-fwiyg/embed/charts?id=ce90610f-28eb-4aad-9d2a-034ab1bbe191&autoRefresh=60&theme=light"></iframe>'

    const Iframe = () => {
        return (<div dangerouslySetInnerHTML={ {__html: iframe?iframe:""}} />);
    }
    return (
        <div>
            <Iframe iframe={iframe} />
        </div>
    );
}

export default Monthly;