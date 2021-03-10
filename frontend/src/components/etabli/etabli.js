import React from 'react' ;
import styles from '../../App.css';
import Sidebar from '../sidebar/sidebar';
import Img from '../../images/mass2.jpg'


const Etabli = () => {      

   
    return(
        <div>
            <Sidebar></Sidebar>

                <div className="box box-etabli">
                    <h1>Yamete Senpai</h1>

                    <div className="paragraphe-etabli"> 
                        <h3>Yamete Senpai, institut de beauté, propose une large palette de soins beauté et bien-être pour les hommes et les femmes :</h3>
                        <p>Soins du visage pour tous types de peau, notre institut de beauté réalise tout peelings, soins revitalisants, repulpants, lissants, redensifiant, éclaircissant
                        Soins du corps, modelages suédois, modelages relaxants, parcours de soins Spa vitalité ou sérénité…</p>
                        <p>Soins beauté des mains, manucure, pose de vernis, French, vernis semi-permanent.</p>
                        <p>Toutes épilations à la cire pour les femmes et les hommes Maquillage traditionnel, sophistiqué, haute défi nition, flash…</p>
                    </div>

                    <svg className="yoga"  viewBox="0 0 1079 412" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M464.898 408.298C694.687 408.298 880.968 390.614 880.968 368.798C880.968 346.983 694.687 329.298 464.898 329.298C235.109 329.298 48.8281 346.983 48.8281 368.798C48.8281 390.614 235.109 408.298 464.898 408.298Z" fill="#FF2D55"/>
<path d="M754.278 98.7382C716.978 115.448 694.508 53.8882 694.508 53.8882C694.508 53.8882 682.838 43.0982 648.678 45.7982C614.518 48.4982 559.258 39.4981 559.258 39.4981C559.258 39.4981 538.588 58.8381 512.078 60.1581C512.078 60.1581 492.758 66.8982 490.078 72.2982C487.888 76.6782 483.908 85.8282 482.488 89.0782C482.406 89.3205 482.309 89.5576 482.198 89.7881C482.058 90.0981 481.998 90.2681 481.998 90.2681L480.888 90.7881L458.628 101.478L428.078 110.028L408.748 112.268L375.948 89.5381C375.948 89.5381 379.738 85.9981 385.308 81.5381C393.818 74.7881 406.428 65.9682 415.948 64.6082C415.948 64.6082 428.868 56.4381 437.518 47.9881C440.728 44.8381 474.348 29.5081 503.248 18.4381C527.337 9.21276 552.514 3.13261 578.158 0.348145L675.648 20.9381C686.36 23.1961 696.574 27.3733 705.798 33.2681C732.248 50.2981 782.378 86.1582 754.278 98.7382Z" fill="#FFC1C7"/>
<g opacity="0.1">
<path opacity="0.1" d="M380.448 92.268C380.448 92.268 384.238 88.718 389.808 84.268C398.318 77.518 410.928 68.698 420.448 67.338C420.448 67.338 433.368 59.168 442.018 50.718C445.228 47.558 478.848 32.238 507.748 21.168C531.839 11.9653 557.017 5.91189 582.658 3.15802L680.148 23.738C690.858 25.9976 701.069 30.1785 710.288 36.078C711.842 37.0714 713.462 38.1214 715.148 39.228C711.998 37.108 708.998 35.138 706.248 33.378C697.028 27.4834 686.816 23.3061 676.108 21.048L578.618 0.458008C552.974 3.24127 527.796 9.32148 503.708 18.548C474.798 29.618 441.178 44.948 437.978 48.098C429.318 56.548 416.408 64.718 416.408 64.718C406.888 66.078 394.268 74.898 385.768 81.648C380.198 86.078 376.408 89.648 376.408 89.648L409.208 112.378H409.338L380.448 92.268Z" fill="black"/>
<path opacity="0.1" d="M699.038 56.5779C697.81 55.5786 696.467 54.7293 695.038 54.0479C695.938 56.4279 707.318 85.9078 726.728 97.2278C709.028 83.9378 699.038 56.5779 699.038 56.5779Z" fill="black"/>
</g>
<path d="M629.968 201.028C629.844 201.545 629.694 202.056 629.518 202.558C629.438 202.818 629.328 203.078 629.238 203.328C628.984 203.953 628.697 204.564 628.378 205.158C628.248 205.428 628.098 205.698 627.968 205.958C627.936 206.018 627.9 206.075 627.858 206.128C627.718 206.388 627.578 206.628 627.428 206.868C626.428 208.568 625.268 210.188 624.158 211.868C623.788 212.408 623.418 212.958 623.068 213.518C623.006 213.633 622.936 213.743 622.858 213.848C622.668 214.158 622.468 214.488 622.288 214.848C622.108 215.208 621.968 215.388 621.828 215.658C621.688 215.928 621.668 215.938 621.598 216.078L621.168 216.908C620.667 217.95 620.268 219.039 619.978 220.158C618.438 226.508 621.158 233.018 623.368 239.158C627.828 251.618 630.288 265.558 626.068 277.998C625.968 278.288 625.868 278.588 625.758 278.888C625.648 279.188 625.458 279.678 625.298 280.068C625.058 280.668 624.788 281.258 624.488 281.848C622.208 286.288 618.298 290.278 613.488 289.848C606.878 289.268 603.668 281.168 597.648 278.408C592.418 276.008 585.808 277.968 580.878 275.008C581.289 273.66 581.849 272.362 582.548 271.138C583.438 269.498 584.548 267.928 585.548 266.368C587.226 264.064 588.572 261.536 589.548 258.858C589.74 258.261 589.897 257.653 590.018 257.038C590.024 256.992 590.024 256.945 590.018 256.898C590.068 256.588 590.128 256.298 590.168 255.988C590.208 255.678 590.248 255.398 590.278 255.078C590.284 255.025 590.284 254.971 590.278 254.918C590.278 254.568 590.278 254.218 590.348 253.858C590.358 250.48 590.023 247.109 589.348 243.798C588.102 236.278 586.848 228.758 585.588 221.238C584.668 215.738 583.768 209.978 585.468 204.668C585.598 204.288 585.738 203.908 585.878 203.538C586.018 203.168 586.188 202.788 586.358 202.428C587.34 200.382 588.498 198.425 589.818 196.578C592.992 191.912 596.395 187.395 600.028 183.028C602.488 180.028 605.128 177.028 606.028 173.288C606.126 172.927 606.199 172.559 606.248 172.188C606.828 168.578 605.808 164.978 604.608 161.368C604.455 160.948 604.315 160.528 604.188 160.108C603.768 158.868 603.348 157.618 602.988 156.348C602.868 155.938 602.758 155.518 602.648 155.098C602.435 154.257 602.265 153.406 602.138 152.548C602.005 151.701 601.932 150.846 601.918 149.988C601.918 149.588 601.918 149.178 601.918 148.778C601.918 148.378 601.918 148.178 601.998 147.868C602.078 147.558 602.088 147.228 602.138 146.868C602.188 146.508 602.218 146.388 602.268 146.148C602.318 145.908 602.418 145.418 602.518 145.068C602.575 144.78 602.652 144.496 602.748 144.218C602.798 143.988 602.868 143.758 602.928 143.538L603.188 142.738L603.598 141.578C603.728 141.198 603.878 140.808 604.028 140.428C604.778 138.428 605.638 136.428 606.388 134.508C606.81 133.398 607.174 132.266 607.478 131.118C607.478 131.118 607.478 131.118 607.478 131.118C607.478 130.908 607.588 130.678 607.638 130.458C607.7 130.238 607.75 130.014 607.788 129.788C607.858 129.512 607.911 129.231 607.948 128.948C608.018 128.578 608.088 128.188 608.128 127.808C608.168 127.428 608.208 127.038 608.238 126.648C608.268 126.258 608.238 125.878 608.238 125.498C608.256 124.143 608.063 122.794 607.668 121.498C607.52 120.969 607.326 120.454 607.088 119.958V119.958C606.915 119.616 606.725 119.282 606.518 118.958C605.238 116.878 603.248 115.288 602.088 113.118C601.404 111.786 601.06 110.305 601.088 108.808C601.085 108.4 601.112 107.992 601.168 107.588C601.229 107.175 601.322 106.767 601.448 106.368C601.49 106.208 601.543 106.051 601.608 105.898C601.682 105.732 601.752 105.572 601.818 105.418C601.916 105.218 602.027 105.025 602.148 104.838C602.248 104.708 602.338 104.568 602.438 104.448C603.498 103.108 605.198 102.448 607.528 103.128L608.098 103.318C609.431 103.746 610.717 104.305 611.938 104.988C615.648 107.103 618.807 110.063 621.158 113.628C625.258 119.808 627.008 127.288 627.518 134.688C627.828 137.841 627.67 141.022 627.048 144.128C627.048 144.258 626.978 144.408 626.958 144.538C626.878 144.838 626.808 145.138 626.708 145.428C626.101 147.243 625.4 149.026 624.608 150.768C624.608 150.768 624.608 150.768 624.608 150.768C623.967 152.213 623.477 153.721 623.148 155.268C622.208 160.408 624.258 165.538 625.918 170.488C627.491 175.187 628.741 179.989 629.658 184.858C630.818 190.228 631.378 195.858 629.968 201.028Z" fill="#965D7B"/>
<g opacity="0.1">
<path opacity="0.1" d="M624.749 150.788C625.546 149.04 626.25 147.251 626.859 145.428C626.989 144.998 627.109 144.568 627.209 144.128C626.188 146.269 625.364 148.498 624.749 150.788Z" fill="black"/>
<path opacity="0.1" d="M606.728 118.958C608.948 122.558 608.728 126.958 607.628 131.188C607.708 130.968 607.798 130.758 607.878 130.538C609.788 125.538 610.878 119.538 608.078 114.918C606.788 112.838 604.788 111.238 603.638 109.078C602.906 107.649 602.561 106.052 602.638 104.448C600.948 106.548 600.828 110.308 602.338 113.128C603.438 115.288 605.438 116.878 606.728 118.958Z" fill="black"/>
<path opacity="0.1" d="M621.379 216.159C621.329 216.379 621.289 216.598 621.249 216.828C623.449 212.158 627.329 208.199 629.249 203.359C629.653 202.344 629.97 201.297 630.199 200.229C627.629 205.739 622.759 210.209 621.379 216.159Z" fill="black"/>
<path opacity="0.1" d="M626.648 276.068C624.588 281.148 620.298 286.318 614.828 285.838C608.218 285.268 605.018 277.168 598.988 274.398C593.868 272.048 587.428 273.868 582.538 271.178C581.844 272.404 581.284 273.702 580.868 275.048C585.798 278.048 592.408 276.048 597.638 278.438C603.638 281.208 606.868 289.318 613.478 289.888C618.948 290.358 623.238 285.188 625.298 280.108C625.85 278.737 626.321 277.335 626.708 275.908L626.648 276.068Z" fill="black"/>
<path opacity="0.1" d="M589.428 243.838C590.158 248.218 590.878 252.768 590.018 257.078C590.354 256.357 590.645 255.615 590.888 254.858C592.428 250.028 591.608 244.798 590.778 239.798C589.532 232.278 588.278 224.755 587.018 217.228C586.208 212.338 585.408 207.228 586.438 202.458C586.096 203.189 585.799 203.941 585.548 204.708C583.848 210.018 584.758 215.768 585.668 221.268C586.928 228.801 588.182 236.325 589.428 243.838Z" fill="black"/>
<path opacity="0.1" d="M607.488 169.288C609.418 161.548 603.488 153.958 603.378 145.988C603.395 144.135 603.661 142.291 604.168 140.508C602.861 143.521 602.139 146.755 602.038 150.038C602.108 157.638 607.518 164.888 606.348 172.268C606.838 171.321 607.221 170.321 607.488 169.288V169.288Z" fill="black"/>
</g>
<path d="M823.479 281.258C812.249 318.548 787.079 332.928 787.079 332.928C787.079 332.928 759.669 358.098 753.819 371.158C747.969 384.218 730.459 380.598 723.279 371.158C716.099 361.718 693.619 365.328 693.619 365.328L659.459 368.018C659.459 368.018 597.559 376.228 576.779 361.848C555.999 347.468 542.179 347.358 542.179 347.358C542.179 347.358 525.999 354.538 507.589 355.448C498.843 356.031 490.152 357.261 481.589 359.128C476.819 360.128 472.649 361.128 469.659 361.838C466.669 362.548 464.889 363.078 464.889 363.078L419.129 358.468L375.909 354.098L352.549 350.938L346.419 337.598L340.519 324.778L338.519 320.398L341.319 274.588H415.019C415.019 274.588 491.879 278.588 501.749 278.588H503.989C503.989 278.588 516.279 273.668 536.339 285.768C538.896 287.202 541.573 288.414 544.339 289.388C576.219 301.298 665.789 316.778 665.789 316.778L723.789 313.178C723.789 313.178 756.399 301.298 774.789 293.468C780.919 290.848 785.479 288.678 786.699 287.568C791.569 283.058 834.709 243.958 823.479 281.258Z" fill="#FFC1C7"/>
<path opacity="0.1" d="M366.648 319.618L370.198 332.258L358.058 338.838L346.428 337.558L340.528 324.738L338.528 320.358L341.328 274.548H414.978C399.608 275.928 366.648 319.618 366.648 319.618Z" fill="black"/>
<path d="M365.298 319.618L368.848 332.258L356.718 338.838L326.048 335.468L309.528 322.158C282.528 278.348 249.878 278.158 249.878 278.158C249.878 278.158 253.928 272.248 253.758 266.858C253.588 261.468 259.698 247.648 259.698 247.648L260.278 247.368C262.338 246.368 269.328 242.908 269.768 242.758C269.768 242.758 408.438 265.168 411.138 266.018C411.835 266.308 412.406 266.836 412.748 267.508C414.318 269.968 415.018 274.508 415.018 274.508C400.378 273.158 365.298 319.618 365.298 319.618Z" fill="#565988"/>
<path d="M529.158 132.518C525.084 132.433 521.01 132.69 516.978 133.288C510.268 134.378 503.838 136.928 506.688 142.858C512.078 154.088 477.928 173.858 477.928 173.858L430.288 204.418L400.628 159.478L415.918 123.078L458.598 101.508L481.978 90.2881C481.978 90.2881 491.238 93.658 499.378 93.468C503.138 93.388 506.668 92.5481 508.938 90.2881C516.118 83.0981 529.158 132.518 529.158 132.518Z" fill="#FFC1C7"/>
<path opacity="0.1" d="M529.158 132.518C525.084 132.433 521.009 132.69 516.978 133.288C511.434 129.394 506.91 124.22 503.791 118.206C500.671 112.191 499.048 105.513 499.058 98.7381C499.053 96.9764 499.16 95.2162 499.378 93.468C503.138 93.388 506.668 92.5481 508.938 90.2881C516.118 83.0981 529.158 132.518 529.158 132.518Z" fill="black"/>
<path d="M586.218 98.7381C586.22 104.285 585.128 109.778 583.007 114.903C580.885 120.029 577.775 124.686 573.854 128.609C569.932 132.532 565.276 135.645 560.152 137.769C555.028 139.893 549.535 140.987 543.988 140.988C542.031 140.989 540.076 140.852 538.138 140.578C527.536 139.109 517.886 133.668 511.141 125.357C504.395 117.046 501.056 106.484 501.799 95.8062C502.542 85.128 507.311 75.1301 515.143 67.8333C522.975 60.5366 533.284 56.4852 543.988 56.4981C545.605 56.5024 547.221 56.5926 548.828 56.7681C559.123 57.9623 568.619 62.8975 575.513 70.6355C582.406 78.3735 586.216 88.3748 586.218 98.7381V98.7381Z" fill="#FFC1C7"/>
<path opacity="0.1" d="M774.948 294.288C774.948 299.648 746.458 310.538 721.888 318.938C704.655 324.684 686.535 327.315 668.378 326.708C666.911 326.633 665.44 326.764 664.008 327.098C657.268 328.888 569.648 308.218 569.648 308.218C569.648 308.218 551.758 299.918 544.358 289.368C576.238 301.278 665.808 316.758 665.808 316.758L723.808 313.158C723.808 313.158 756.418 301.278 774.808 293.448C774.931 293.71 774.98 294.001 774.948 294.288V294.288Z" fill="black"/>
<path d="M510.728 146.998C510.728 146.998 517.018 163.528 525.108 167.568C533.198 171.608 549.368 187.788 548.028 208.908C548.028 208.908 545.328 214.758 553.868 226.908C562.408 239.058 583.078 265.548 583.078 265.548C583.078 265.548 625.308 280.378 638.788 289.368H638.838C649.438 290.89 659.854 293.487 669.928 297.118C675.688 299.118 682.738 301.048 689.118 301.048C703.048 301.048 774.948 282.178 774.948 291.608C774.948 296.978 746.458 307.868 721.878 316.268C704.645 322 686.529 324.621 668.378 324.008C666.91 323.937 665.44 324.069 664.008 324.398C657.268 326.188 569.638 305.518 569.638 305.518C569.638 305.518 551.168 296.988 543.978 286.158C536.788 275.328 518.378 261.488 518.378 261.488C518.378 261.488 498.158 227.338 496.378 219.248C496.378 219.248 486.048 213.408 459.078 222.388C432.108 231.368 453.208 202.158 453.208 202.158L483.318 167.158L510.728 146.998Z" fill="#FFC1C7"/>
<path opacity="0.1" d="M519.268 159.488L509.878 136.648C501.13 142.201 492.983 148.649 485.568 155.888C474.328 167.118 466.688 173.888 461.298 175.208C455.908 176.528 437.488 185.908 429.848 166.628C422.208 147.348 425.348 134.318 432.538 128.028C439.728 121.738 488.378 92.1579 488.378 92.1579L481.988 91.6679C481.988 91.6679 437.508 107.238 423.578 100.128C423.578 100.128 398.858 104.258 393.468 95.2679C388.078 86.2779 382.988 84.8579 382.988 84.8579L350.328 128.968L362.018 226.478H392.118L424.468 213.898L467.608 210.298C467.608 210.298 483.788 195.018 486.038 187.828C488.288 180.638 505.378 157.238 519.268 159.488Z" fill="black"/>
<path d="M519.268 158.158L509.878 135.318C501.13 140.872 492.983 147.32 485.568 154.558C474.328 165.798 466.688 172.558 461.298 173.878C455.908 175.198 437.488 184.578 429.848 165.298C422.208 146.018 425.348 132.988 432.538 126.698C439.728 120.408 488.378 92.1583 488.378 92.1583L481.988 90.3283C481.988 90.3283 437.508 105.888 423.578 98.7783C423.578 98.7783 398.858 102.908 393.468 93.9183C388.078 84.9283 382.988 83.5083 382.988 83.5083L350.328 127.618L362.018 225.128H392.118L424.468 212.548L467.608 208.948C467.608 208.948 483.788 193.678 486.038 186.488C488.288 179.298 505.378 155.888 519.268 158.158Z" fill="#565988"/>
<path opacity="0.1" d="M412.748 267.528C412.228 270.008 411.808 271.598 411.808 271.598C411.808 271.598 409.958 270.918 387.218 275.308C364.478 279.698 341.888 275.308 341.888 275.308C328.681 273.777 315.609 271.239 302.788 267.718C283.248 262.158 257.628 255.578 259.788 248.718C259.928 248.318 260.068 247.868 260.238 247.428C262.298 246.428 269.288 242.968 269.728 242.818C269.728 242.818 408.398 265.228 411.098 266.078C411.803 266.349 412.389 266.863 412.748 267.528V267.528Z" fill="black"/>
<path opacity="0.1" d="M509.878 136.648L517.678 154.278C517.678 154.278 505.678 147.908 490.338 174.028C474.998 200.148 472.978 203.858 472.978 203.858C472.978 203.858 462.198 211.218 464.898 220.598C464.898 220.598 432.958 231.598 411.898 224.328C411.898 224.328 407.178 238.568 407.688 248.178C408.003 253.309 408.03 258.454 407.768 263.588C407.768 263.588 413.768 259.038 391.008 263.428C368.248 267.818 345.678 266.538 345.678 266.538C333.261 264.513 320.968 261.785 308.858 258.368C289.308 252.808 258.978 254.238 261.168 247.368C263.358 240.498 270.608 227.488 270.608 227.488C270.608 227.488 275.828 224.488 275.608 221.588C275.388 218.688 285.218 210.298 285.218 210.298C285.218 210.298 291.278 205.248 290.438 201.028C289.598 196.808 296.338 189.908 296.338 189.908L309.148 164.808C309.148 164.808 319.928 141.378 327.348 140.368C334.768 139.358 348.408 117.788 348.408 117.788C348.408 117.788 372.668 98.2482 372.838 94.1982C373.008 90.1482 384.968 82.9082 384.968 82.9082C384.968 82.9082 386.898 99.4482 402.968 100.128C419.038 100.808 440.268 100.128 440.268 100.128L481.958 90.3282C481.958 90.3282 463.698 106.838 459.478 108.018C455.258 109.198 442.578 118.298 436.118 120.018C429.658 121.738 416.528 130.558 417.038 143.158C417.548 155.758 421.928 162.158 421.928 162.158C421.928 162.158 435.068 187.158 448.208 184.158C448.208 184.158 462.888 184.948 468.768 176.238C474.648 167.528 509.878 136.648 509.878 136.648Z" fill="black"/>
<path opacity="0.1" d="M483.318 88.9381L482.178 89.8081L480.868 90.8081L458.608 101.498L428.058 110.048L408.728 112.288L375.928 89.5581C375.928 89.5581 379.718 86.0181 385.288 81.5581C386.188 85.5581 389.858 96.7981 402.998 97.3481C419.048 98.0381 440.298 97.3481 440.298 97.3481L482.478 89.0581L483.318 88.9381Z" fill="black"/>
<path d="M509.878 135.298L517.678 154.298C517.678 154.298 504.328 146.588 488.988 172.708C473.648 198.828 471.638 202.528 471.638 202.528C471.638 202.528 462.198 211.238 464.898 220.618C464.898 220.618 435.738 235.388 414.678 228.138C414.678 228.138 414.178 236.908 414.678 246.508C415.178 256.108 411.818 268.918 411.818 268.918C411.818 268.918 409.958 268.248 387.208 272.628C364.458 277.008 341.888 272.628 341.888 272.628C328.681 271.103 315.609 268.569 302.788 265.048C283.248 259.488 257.628 252.908 259.788 246.048C261.948 239.188 269.228 226.158 269.228 226.158C269.228 226.158 274.448 223.158 274.288 220.258C274.128 217.358 283.888 208.968 283.888 208.968C283.888 208.968 289.958 203.968 289.108 199.708C288.258 195.448 295.008 188.578 295.008 188.578L307.818 163.478C307.818 163.478 318.598 140.048 326.018 139.038C333.438 138.028 347.078 116.458 347.078 116.458C347.078 116.458 371.378 96.8581 371.538 92.8081C371.698 88.7581 383.678 81.5181 383.678 81.5181C383.678 81.5181 385.598 98.0581 401.678 98.7381C417.758 99.4181 438.988 98.7381 438.988 98.7381L481.988 90.2881C481.988 90.2881 462.388 105.448 458.178 106.628C453.968 107.808 441.268 116.908 434.808 118.628C428.348 120.348 415.208 129.248 415.708 141.888C416.208 154.528 420.598 160.888 420.598 160.888C420.598 160.888 433.738 185.828 446.888 182.798C446.888 182.798 461.558 183.578 467.438 174.878C473.318 166.178 509.878 135.298 509.878 135.298Z" fill="#E8F4FF"/>
<path opacity="0.1" d="M379.128 196.438C379.128 196.438 395.638 227.108 403.218 230.438C410.798 233.768 409.288 228.078 409.288 228.078C409.288 228.078 381.488 203.158 379.128 196.438Z" fill="black"/>
<path opacity="0.1" d="M347.278 219.698C347.278 219.698 363.458 245.478 375.418 245.478L347.278 219.698Z" fill="black"/>
<path opacity="0.1" d="M311.718 187.848C311.718 187.848 330.598 247.498 365.308 252.218C365.308 252.218 319.978 218.858 311.718 187.848Z" fill="black"/>
<path opacity="0.1" d="M315.088 239.408C315.088 239.408 346.268 264.178 365.308 260.478C365.308 260.478 332.788 254.918 315.088 239.408Z" fill="black"/>
<path opacity="0.1" d="M291.948 281.908C291.948 281.908 323.118 306.678 342.168 302.968C342.168 302.968 309.638 297.408 291.948 281.908Z" fill="black"/>
<path opacity="0.1" d="M300.098 295.968C300.098 295.968 331.268 320.738 350.308 317.038C350.308 317.038 317.788 311.478 300.098 295.968Z" fill="black"/>
<path opacity="0.1" d="M304.809 273.158C304.809 273.158 335.979 297.898 355.019 294.158C355.019 294.158 322.499 288.628 304.809 273.158Z" fill="black"/>
<path opacity="0.1" d="M448.378 126.508L428.838 151.618L431.528 156.668L448.378 126.508Z" fill="black"/>
<path opacity="0.1" d="M586.218 98.7379C586.22 104.285 585.128 109.778 583.007 114.903C580.885 120.028 577.775 124.686 573.854 128.609C569.932 132.532 565.276 135.645 560.152 137.769C555.028 139.893 549.535 140.987 543.988 140.988C542.031 140.989 540.076 140.852 538.138 140.578C538.762 139.867 539.283 139.072 539.688 138.218C540.938 134.728 535.688 131.088 537.338 127.748C538.188 125.968 540.478 125.518 542.448 125.468C544.418 125.418 546.608 125.468 548.038 124.108C549.688 122.518 549.458 119.898 549.878 117.648C550.538 114.228 552.938 111.378 555.548 109.048C558.158 106.718 561.078 104.708 563.328 102.048C566.778 97.9479 568.398 92.5879 568.828 87.2479C569.108 83.7979 568.828 80.1279 567.008 77.2479C565.008 74.1579 561.578 72.4179 558.438 70.5179C555.517 68.9023 552.974 66.683 550.978 64.0079C549.698 62.1279 548.418 59.1979 548.828 56.8179C559.114 58.0111 568.604 62.9392 575.496 70.6667C582.388 78.3941 586.204 88.3832 586.218 98.7379V98.7379Z" fill="black"/>
<path d="M609.378 100.808C609.213 101.509 608.947 102.183 608.588 102.808C608.488 102.988 608.368 103.178 608.258 103.368L607.648 104.298C606.687 105.5 606.05 106.929 605.798 108.448C605.678 110.298 606.688 111.988 607.348 113.748L607.458 114.058C607.549 114.307 607.626 114.561 607.688 114.818C608.096 116.557 607.96 118.379 607.298 120.038V120.038C606.575 121.889 605.506 123.586 604.148 125.038C601.598 127.788 598.388 129.868 595.818 132.588C593.898 134.588 592.348 136.958 590.448 138.978C585.948 143.738 579.648 146.468 573.238 147.768C568.22 148.672 563.126 149.084 558.028 148.998H553.678C552.997 149.039 552.315 148.933 551.678 148.688C550.944 148.195 550.309 147.567 549.808 146.838C547.188 143.838 542.808 143.268 538.808 142.928C538.767 142.547 538.804 142.161 538.917 141.794C539.031 141.428 539.218 141.089 539.468 140.798C540.115 140.031 540.666 139.188 541.108 138.288C542.368 134.788 537.108 131.158 538.768 127.798C538.922 127.482 539.132 127.198 539.388 126.958C539.556 126.79 539.74 126.639 539.938 126.508C541.14 125.833 542.5 125.488 543.878 125.508C544.618 125.508 545.388 125.508 546.138 125.418C547.329 125.371 548.469 124.928 549.378 124.158V124.158C551.028 122.588 550.798 119.958 551.218 117.718C551.878 114.278 554.278 111.438 556.888 109.118C559.498 106.798 562.418 104.778 564.668 102.118C568.118 98.028 569.738 92.6479 570.168 87.3279C570.448 83.8779 570.168 80.1979 568.348 77.3279C566.608 74.6279 563.748 72.9579 560.958 71.3279L559.778 70.6279C557.611 69.3784 555.623 67.8411 553.868 66.0579C553.323 65.3938 552.825 64.692 552.378 63.9579C551.128 62.1179 549.888 59.2879 550.198 56.9579C550.21 56.8024 550.237 56.6484 550.278 56.4979C550.868 53.9279 553.408 53.8979 555.818 53.5779C556.468 53.4979 557.108 53.4279 557.758 53.3879C558.718 53.3329 559.679 53.3329 560.638 53.3879C564.748 53.5419 568.766 54.6439 572.378 56.6079C573.718 57.3379 574.998 58.1879 576.378 58.8179C579.658 60.2879 583.378 60.4779 586.758 61.5579C593.598 63.6979 598.908 69.2979 602.278 75.6179C605.648 81.9379 607.328 88.9879 608.978 95.9479C609.468 97.5187 609.605 99.1783 609.378 100.808V100.808Z" fill="#965D7B"/>
<path opacity="0.1" d="M481.598 359.088C481.389 359.998 481.053 360.873 480.598 361.688C480.598 361.688 476.138 361.848 469.598 361.798C460.668 361.728 447.908 361.268 437.598 359.448C431.45 358.562 425.236 358.228 419.028 358.448L375.808 354.078L352.448 350.918L340.448 324.758C347.388 325.138 353.368 324.868 353.368 324.868C366.638 312.288 378.988 314.308 385.728 319.768C392.468 325.228 405.058 329.578 405.948 329.578C406.548 329.578 426.418 329.998 439.198 330.258C449.098 330.405 458.807 333.003 467.458 337.818C482.378 346.158 482.598 354.878 481.598 359.088Z" fill="black"/>
<path d="M259.688 274.558L249.878 278.158C249.878 278.158 222.698 259.458 182.928 268.218C143.158 276.978 145.858 300.348 145.858 300.348C145.858 300.348 147.428 328.988 158.858 338.818C170.288 348.648 177.508 349.098 184.018 356.518C190.528 363.938 224.238 367.298 224.238 367.298C224.238 367.298 290.968 370.668 326.918 367.298C362.868 363.928 379.098 363.928 379.098 363.928C379.098 363.928 418.578 358.988 436.328 362.128C454.078 365.268 479.248 364.378 479.248 364.378C479.248 364.378 486.668 352.098 466.158 340.488C457.51 335.667 447.799 333.069 437.898 332.928C425.128 332.658 405.258 332.248 404.648 332.248C403.748 332.248 391.168 327.898 384.428 322.438C377.688 316.978 365.338 314.948 352.078 327.528C352.078 327.528 322.648 328.878 318.598 321.468C314.548 314.058 293.658 290.798 293.658 290.798L259.688 274.558Z" fill="#FFC1C7"/>
<path opacity="0.1" d="M308.518 318.698C308.518 318.698 308.298 322.768 317.398 322.098C325.818 321.468 292.458 291.428 292.458 291.428L258.458 275.178L248.648 278.788C248.648 278.788 281.558 274.888 308.518 318.698Z" fill="black"/>
<path d="M309.868 317.348C309.868 317.348 309.648 321.418 318.748 320.748C327.168 320.128 293.808 290.078 293.808 290.078L259.808 273.828L249.988 277.438C249.988 277.438 282.908 273.538 309.868 317.348Z" fill="#565988"/>
<path opacity="0.1" d="M213.258 289.568C213.258 289.568 222.918 284.628 237.078 290.808C242.134 292.985 247.341 294.794 252.658 296.218C261.185 298.52 269.369 301.94 276.998 306.388C286.858 312.118 300.238 318.998 307.678 318.998" stroke="black" stroke-miterlimit="10"/>
<path opacity="0.1" d="M556.378 148.918C555.697 148.965 555.014 148.859 554.378 148.608C553.639 148.121 553.004 147.492 552.508 146.758C549.888 143.758 545.458 143.188 541.508 142.858C541.188 141.118 543.198 139.858 543.798 138.218C545.068 134.718 539.798 131.088 541.458 127.738C542.318 125.968 544.608 125.518 546.578 125.468C548.548 125.418 550.738 125.468 552.158 124.098C553.808 122.518 553.578 119.888 554.008 117.648C554.658 114.218 557.058 111.368 559.668 109.048C562.278 106.728 565.208 104.708 567.458 102.048C570.898 97.958 572.518 92.588 572.958 87.258C573.238 83.798 572.958 80.1279 571.128 77.2079C569.128 74.1279 565.698 72.388 562.558 70.478C559.638 68.8624 557.095 66.6431 555.098 63.968C553.778 62.028 552.438 58.9679 552.998 56.5179C553.558 54.0679 556.138 53.918 558.548 53.598C559.258 53.498 559.958 53.438 560.678 53.398C559.066 53.3245 557.45 53.3915 555.848 53.598C553.438 53.918 550.848 53.9479 550.298 56.5179C549.748 59.0879 551.078 62.028 552.408 63.968C554.405 66.6431 556.948 68.8624 559.868 70.478C562.918 72.368 566.378 74.158 568.378 77.158C570.248 80.078 570.488 83.7479 570.208 87.2079C569.768 92.5379 568.208 97.908 564.708 101.998C562.458 104.678 559.538 106.688 556.928 108.998C554.318 111.308 551.928 114.168 551.258 117.598C550.828 119.838 551.058 122.468 549.418 124.048C547.998 125.408 545.798 125.368 543.828 125.418C541.858 125.468 539.568 125.918 538.708 127.688C537.088 131.038 542.318 134.688 541.058 138.168C540.448 139.828 538.448 141.068 538.758 142.808C542.758 143.138 547.178 143.678 549.758 146.708C550.248 147.446 550.885 148.076 551.628 148.558C552.263 148.811 552.947 148.917 553.628 148.868C555.078 148.868 556.538 148.868 557.998 148.868L556.378 148.918Z" fill="black"/>
<path d="M607.868 121.548C608.268 120.268 608.718 118.838 609.158 117.318C610.451 113.296 611.431 109.181 612.088 105.008C610.867 104.325 609.581 103.765 608.248 103.338C608.358 103.148 608.478 102.958 608.578 102.778L607.678 103.148C607.678 103.148 607.678 103.568 607.678 104.268C607.608 106.168 607.468 110.188 607.378 113.718C607.378 113.778 607.378 113.828 607.378 113.878C607.308 116.668 607.268 119.138 607.378 120.018L607.868 121.548Z" fill="#565988"/>
<path opacity="0.1" d="M895.918 343.658C919.954 343.658 939.438 340.981 939.438 337.678C939.438 334.376 919.954 331.698 895.918 331.698C871.883 331.698 852.398 334.376 852.398 337.678C852.398 340.981 871.883 343.658 895.918 343.658Z" fill="#FF2D55"/>
<path d="M913.568 330.228C915.398 328.528 917.108 326.528 917.638 324.088C918.168 321.648 917.118 318.718 914.788 317.828C912.178 316.828 909.388 318.648 907.278 320.468C905.168 322.288 902.738 324.388 899.968 323.998C901.387 322.705 902.447 321.066 903.044 319.242C903.642 317.418 903.757 315.47 903.378 313.588C903.248 312.802 902.902 312.068 902.378 311.468C900.928 309.918 898.298 310.588 896.568 311.808C891.048 315.688 889.508 323.188 889.478 329.938C888.918 327.498 889.388 324.938 889.378 322.468C889.368 319.998 888.678 317.198 886.568 315.858C885.254 315.154 883.778 314.809 882.288 314.858C879.808 314.768 877.048 315.008 875.348 316.858C873.248 319.108 873.788 322.858 875.628 325.378C877.468 327.898 880.238 329.378 882.808 331.128C884.864 332.357 886.617 334.031 887.938 336.028C888.091 336.306 888.218 336.597 888.318 336.898H903.878C907.398 335.128 910.659 332.884 913.568 330.228Z" fill="#FF2D55"/>
<path opacity="0.1" d="M1035.07 369.328C1059.1 369.328 1078.59 366.651 1078.59 363.348C1078.59 360.046 1059.1 357.368 1035.07 357.368C1011.03 357.368 991.548 360.046 991.548 363.348C991.548 366.651 1011.03 369.328 1035.07 369.328Z" fill="#FF2D55"/>
<path d="M1052.72 355.898C1054.55 354.198 1056.26 352.198 1056.79 349.758C1057.32 347.318 1056.27 344.388 1053.94 343.498C1051.33 342.498 1048.54 344.308 1046.43 346.138C1044.32 347.968 1041.89 350.058 1039.12 349.668C1040.54 348.376 1041.61 346.738 1042.21 344.911C1042.81 343.085 1042.93 341.134 1042.56 339.248C1042.43 338.466 1042.08 337.736 1041.56 337.138C1040.11 335.588 1037.48 336.248 1035.75 337.478C1030.23 341.358 1028.69 348.858 1028.66 355.598C1028.1 353.168 1028.57 350.598 1028.56 348.138C1028.55 345.678 1027.86 342.868 1025.75 341.528C1024.43 340.823 1022.96 340.478 1021.47 340.528C1018.99 340.438 1016.23 340.688 1014.53 342.528C1012.43 344.778 1012.97 348.528 1014.81 351.048C1016.65 353.568 1019.42 355.048 1021.99 356.798C1024.05 358.024 1025.8 359.699 1027.12 361.698C1027.28 361.974 1027.4 362.266 1027.5 362.568H1043.06C1046.57 360.792 1049.82 358.549 1052.72 355.898V355.898Z" fill="#FF2D55"/>
<path opacity="0.1" d="M65.3681 333.898C89.4036 333.898 108.888 331.221 108.888 327.918C108.888 324.615 89.4036 321.938 65.3681 321.938C41.3327 321.938 21.8481 324.615 21.8481 327.918C21.8481 331.221 41.3327 333.898 65.3681 333.898Z" fill="#FF2D55"/>
<path d="M83.0083 320.468C84.8383 318.768 86.5583 316.768 87.0783 314.328C87.5983 311.888 86.5683 308.958 84.2383 308.068C81.6283 307.068 78.8383 308.878 76.7183 310.708C74.5983 312.538 72.1783 314.628 69.4083 314.238C70.8346 312.948 71.9015 311.309 72.5045 309.483C73.1075 307.656 73.2259 305.704 72.8483 303.818C72.7125 303.037 72.3668 302.308 71.8483 301.708C70.3983 300.158 67.7683 300.818 66.0283 302.048C60.5083 305.928 58.9683 313.428 58.9383 320.168C58.3883 317.738 58.8583 315.168 58.8383 312.708C58.8183 310.248 58.1383 307.438 56.0383 306.098C54.7243 305.395 53.248 305.05 51.7583 305.098C49.2783 305.008 46.5083 305.258 44.8183 307.098C42.7083 309.348 43.2583 313.098 45.0883 315.618C46.9183 318.138 49.7083 319.618 52.2783 321.368C54.3353 322.595 56.0888 324.27 57.4083 326.268C57.5607 326.546 57.6878 326.838 57.7883 327.138H73.3783C76.875 325.36 80.1145 323.117 83.0083 320.468V320.468Z" fill="#FF2D55"/>
<path d="M39.4883 405.278C41.3183 403.578 43.0283 401.578 43.5583 399.138C44.0883 396.698 43.0483 393.768 40.7183 392.878C38.0983 391.878 35.3083 393.688 33.1983 395.518C31.0883 397.348 28.6583 399.438 25.8883 399.048C27.322 397.762 28.3972 396.125 29.009 394.299C29.6207 392.472 29.748 390.518 29.3783 388.628C29.246 387.846 28.8999 387.116 28.3783 386.518C26.9283 384.968 24.3083 385.628 22.5683 386.858C17.0483 390.738 15.5083 398.238 15.4783 404.988C14.9183 402.548 15.3883 399.988 15.3783 397.518C15.3683 395.048 14.6783 392.248 12.5683 390.908C11.2597 390.2 9.78536 389.854 8.29831 389.908C5.80831 389.808 3.04831 390.058 1.35831 391.908C-0.75169 394.158 -0.20169 397.908 1.62831 400.428C3.45831 402.948 6.24831 404.428 8.80831 406.178C10.8674 407.402 12.6216 409.077 13.9383 411.078C14.0991 411.352 14.2266 411.644 14.3183 411.948H29.8683C33.3615 410.169 36.5976 407.925 39.4883 405.278V405.278Z" fill="#FF2D55"/>
</svg>

                </div>
        </div>
    
    )
    
}

export default Etabli