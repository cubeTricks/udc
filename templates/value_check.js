<script>

    row_items=document.getElementsByName('row-value');
    for(var i=0;i<row_items.length;i++){
        if(row_items[i].textContent>0)
        {
            row_items[i].style.color='red';
        }

        else if(row_items[i].textContent>0)
        {
            row_items[i].style.color='red';
        }
    }

    column_items=document.getElementsByName('col-value');
    for(var i=0;i<column_items.length;i++){

        if(column_items[i].textContent>0)
        {
            column_items[i].style.color='red';
        }

        else if(column_items[i].textContent>0)
        {
            column_items[i].style.color='red';
        }
    }

    function display_all(){
        mismatch_columns=document.getElementById('tab4_1').getElementsByTagName('tr');
        for (i=1;i<mismatch_columns.length;i++)
        {
            mismatch_columns[i].style.display='';
        }
    }

function display_only_mismatch(){
        mismatch_columns=document.getElementById('tab4_1').getElementsByTagName('tr');
        for (i=1;i<mismatch_columns.length;i++)
        {
            if (mismatch_columns[i].style.backgroundColor == 'rgb(255, 0, 0)'){
                mismatch_columns[i].style.display='';
            }

            else {
                mismatch_columns[i].style.display='none';
            }
        }
}


function display_only_match(){
    match_columns=document.getElementById('tab4_1').getElementsByTagName('tr');
    for (i=1;i<match_columns.length;i++)
    {
        if (match_columns[i].style.backgroundColor == 'rgb(0, 255, 0)'){
            match_columns[i].style.display='';
        }

        else {
            match_columns[i].style.display='none';
        }
    }
}

const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.tabValue);
        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active');
        })
        target.classList.add('active');
    })
})

</script>