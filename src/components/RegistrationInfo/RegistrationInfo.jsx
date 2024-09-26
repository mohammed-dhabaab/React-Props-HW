import "./registration-info.css"
function RegistrationInfo() {
    return (
        <section className='registration-info'>
            <div className='section-container'>
                <h3 className="main-title">خطوات التسجيل</h3>

                <div className="steps-container">
                    <div className="step-container">
                        <div className="icon-container">
                            <PersonIcon />
                            <div className="icon-container-background PersonIcon"></div>

                        </div>
                        <h4 className="step-title">الانضمام إلى المنصة</h4>
                    </div>
                    <div className="mobile-line-icon-container">
                        <MobileLineIcon />
                        <MobileLineIcon />
                    </div>
                    <div className="desktop-line-icon-container">
                        <LineIcon />
                    </div>
                    <div className="step-container">
                        <div className="icon-container">
                            <PointerIcon />
                            <div className="icon-container-background PointerIcon"></div>
                        </div>
                        <h4 className="step-title">التــســــــــجيــــــــــــل في المعسكر أو البرنامج</h4>
                    </div>
                    <div className="mobile-line-icon-container">
                        <MobileLineIcon />
                        <MobileLineIcon />
                    </div>
                    <div className="desktop-line-icon-container">
                        <LineIcon />
                    </div>
                    <div className="step-container">
                        <div className="icon-container">
                            <OldPapperIcon />
                            <div className="icon-container-background OldPapperIcon"></div>
                        </div>
                        <h4 className="step-title">انتظار رسالة القــــبــــــــــــول</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

const PersonIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" fill="none"><g fill="#fff" clipPath="url(#a)"><path d="M14.84 39.886h6.181c1.367 0 2.474-1.09 2.474-2.438s-1.107-2.439-2.474-2.439H14.84c-1.367 0-2.474 1.091-2.474 2.439 0 1.347 1.107 2.438 2.474 2.438M26.001 22.252a18 18 0 0 0-1.576-.677 9.62 9.62 0 0 0 2.157-6.062V10.64c0-3.482-1.886-6.704-4.945-8.442a10 10 0 0 0-9.89 0c-3.06 1.74-4.944 4.96-4.944 8.442v4.874A9.7 9.7 0 0 0 9.7 22.407a9.96 9.96 0 0 0 6.992 2.855h1.305c2.01 0 3.992.463 5.79 1.348 3.64 1.797 5.266 4.009 5.266 7.182v3.656c0 1.347 1.106 2.438 2.473 2.438S34 38.796 34 37.448v-3.656c0-5.045-2.693-8.925-7.999-11.54m-14.254-6.739V10.64c0-2.693 2.214-4.875 4.945-4.875s4.945 2.182 4.945 4.875v4.874c0 2.693-2.213 4.875-4.945 4.875-2.731 0-4.945-2.182-4.945-4.875M4.22 24.757a2.5 2.5 0 0 0-3.783.334 2.5 2.5 0 0 0 .385 3.217l3.708 3.655L.76 35.68a2.446 2.446 0 0 0-.37 3.094 2.47 2.47 0 0 0 1.815 1.1 2.5 2.5 0 0 0 2.01-.704l4.513-4.442a3.88 3.88 0 0 0 1.161-2.762c0-1.037-.417-2.03-1.16-2.762l-4.506-4.447z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 .89h34v39H0z" /></clipPath></defs></svg>
    )
}

const PointerIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="36" viewBox="0 0.889 43.997 43.997"><g xmlns="http://www.w3.org/2000/svg" fill="#fff" clipPath="url(#clip0_1909_17172)"><path d="M39.935 32.773a5.64 5.64 0 0 0 3.259-3.952 5.5 5.5 0 0 0-3.44-6.27l-16.386-6.153a6.08 6.08 0 0 0-7.761 3.286 6.08 6.08 0 0 0-.1 4.543l6.152 16.403a5.495 5.495 0 0 0 4.961 3.566h.184a5.5 5.5 0 0 0 2.978-.876 5.46 5.46 0 0 0 2.027-2.35l.07-.143c.425-.927.937-1.813 1.526-2.647l5.898 5.9a2.75 2.75 0 0 0 3.887-3.888l-5.898-5.9a16.3 16.3 0 0 1 2.647-1.526l-.007.007zM26.807 38.7l-6.152-16.402a.58.58 0 0 1 .549-.783q.106 0 .207.033l16.393 6.154a22.14 22.14 0 0 0-10.997 10.998M1.375 24.95a2.75 2.75 0 0 0 5.5 0A17.185 17.185 0 0 1 24.058 7.765a2.752 2.752 0 0 0 2.381-4.125 2.75 2.75 0 0 0-2.381-1.376A22.67 22.67 0 0 0 8.018 8.91a22.7 22.7 0 0 0-6.644 16.04M6.875 36.638a3.437 3.437 0 1 1-3.44-3.436 3.437 3.437 0 0 1 3.437 3.436M39.18 4.326a3.437 3.437 0 1 1-6.875-.002 3.437 3.437 0 0 1 6.874.002" /></g></svg>
    )
}

const OldPapperIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="36" fill="none"><path fill="#fff" d="M35.412.89H12.646c-2.01 0-3.942.789-5.364 2.197a7.46 7.46 0 0 0-2.224 5.305V19.64a5.1 5.1 0 0 0-3.577 1.463A4.96 4.96 0 0 0 0 24.64v3.75c0 1.987.799 3.896 2.224 5.304a7.64 7.64 0 0 0 5.367 2.198h17.704c2.011 0 3.942-.79 5.367-2.198a7.46 7.46 0 0 0 2.224-5.304V17.14h5.059a5.1 5.1 0 0 0 3.578-1.463 4.97 4.97 0 0 0 1.48-3.536v-3.75a7.46 7.46 0 0 0-2.224-5.304A7.64 7.64 0 0 0 35.412.89m-27.824 30c-.67 0-1.314-.263-1.79-.732a2.48 2.48 0 0 1-.74-1.768v-3.75h12.647v3.75c0 .853.15 1.698.44 2.5zM27.825 8.389v19.998a2.49 2.49 0 0 1-.827 1.862c-.53.476-1.24.708-1.956.638a2.6 2.6 0 0 1-1.647-.875 2.55 2.55 0 0 1-.629-1.738v-3.637a4.98 4.98 0 0 0-1.48-3.536 5.09 5.09 0 0 0-3.578-1.463H10.12V8.388c0-.661.265-1.298.74-1.768a2.54 2.54 0 0 1 1.79-.731h15.619a7.4 7.4 0 0 0-.441 2.5zm10.116 3.75h-5.058v-3.75c0-.894.481-1.72 1.265-2.165a2.56 2.56 0 0 1 2.529 0A2.49 2.49 0 0 1 37.94 8.39z" /></svg>
    )
}


const LineIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="146" height="4" fill="none"><path stroke="#8373B6" strokeDasharray="9 9" strokeWidth="3" d="M0 1.89h146" /></svg>
    )
}


const MobileLineIcon = () => {
    return (<svg className="h-full" width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 16C1 9.75161 1 6.24839 1 1.19209e-07" stroke="#8373B6" strokeWidth="1.45434" strokeDasharray="4.36 4.36"></path>
    </svg>)
}
export default RegistrationInfo