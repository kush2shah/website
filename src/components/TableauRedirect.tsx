import React from 'react';

function TableauRedirect() {
    return (
        <div>
            <h1>Tableau Redirect</h1>
            <h2>Click any of these to view the pertinent public visualisations</h2>
            <br></br>
            <a href="https://public.tableau.com/app/profile/kush.shah3302/viz/FoodInaccessibilitybyUSDA/People1mile?publish=yes"
               className={'link'}>All People</a>
            <br></br>
            <a href="https://public.tableau.com/app/profile/kush.shah3302/viz/FoodInaccessibilitybyUSDALowIncome/LowIncome1mile?publish=yes"
               className={'link'}>Low Income People</a>
            <br></br>
            <a href="https://public.tableau.com/app/profile/kush.shah3302/viz/FoodInaccessibilitybyUSDAChildren/Children1mile?publish=yes"
               className={'link'}>Children</a>
            <br></br>
            <a href="https://public.tableau.com/app/profile/kush.shah3302/viz/FoodInaccessibilitybyUSDASeniors/Seniors1mile?publish=yes"
               className={'link'}>Seniors</a>
            <br></br>
            <a href="https://public.tableau.com/app/profile/kush.shah3302/viz/VehicleAccess/VehicleAccess12mile?publish=yes"
               className={'link'}>Vehicle Access</a>

        </div>
    );
}

export default TableauRedirect;