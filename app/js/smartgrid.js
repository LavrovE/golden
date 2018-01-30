const smartgrid = require('smart-grid');

const settings = {
    oldSizeStyle: false,
    properties: [],
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '15px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '0px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1200px' /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '992px'
        },
        sm: {
            width: '768px'
            // fields: '0px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '500px'
        }

    }
};

smartgrid('app/sass', settings);
