import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const CopyRightFooter = () => {
  const navigate = useNavigate();
  const { t } = useTranslation()
  return (
    <div className="copyRightDivparent">
      <div class="custom-shape-divider-bottom-1679262055"style={{marginBottom:"40px"}}>

    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
<div className="copyRightDiv">
       {t("right")}
    </div>
    </div>

  )
}

export default CopyRightFooter
