import {
  MODAL_VIEWS,
  useModalAction,
  useModalState,
} from '@/components/modal-views/context';
import Modal from '@/components/modal-views/modal';
import dynamic from 'next/dynamic';

const LoginUserForm = dynamic(() => import('@/components/auth/login-form'));
// const ProductPopupDetails = dynamic(
//   () => import('@/components/product/product-popup'),
// );
const RegisterUserForm = dynamic(
  () => import('@/components/auth/register-form'),
);
const ForgotUserPassword = dynamic(
  () => import('@/components/auth/forgot-password'),
);
// const ReviewImageModal = dynamic(
//   () => import('@/components/review/review-image-modal'),
// );
// const ReviewRating = dynamic(() => import('@/components/review/review-form'));
// const AbuseReportForm = dynamic(
//   () => import('@/components/review/abuse-report-form'),
// );
// const QuestionForm = dynamic(
//   () => import('@/components/questions/question-form'),
// );

// const PaymentModal = dynamic(
//   () => import('@/components/payment/payment-modal'),
//   { ssr: false },
// );
// const AddNewPaymentModal = dynamic(
//   () => import('@/components/payment/add-new-payment-modal'),
//   { ssr: false },
// );

// const AddNewCardModal = dynamic(
//   () => import('@/components/card/add-new-card-modal'),
//   { ssr: false },
// );

// const GateWayPaymentModal = dynamic(
//   () => import('@/components/payment/gateway-modal/gateway-modal'),
//   { ssr: false },
// );

// const DeleteCardModal = dynamic(() => import('@/components/card/delete-view'));

const NewsLetterModal = dynamic(
  () => import('@/components/maintenance/news-letter'),
  { ssr: false },
);

// const PromoPopup = dynamic(() => import('@/components/promo-popup'), {
//   ssr: false,
// });

// const ReviewPopupModal = dynamic(() => import('@/components/review-popup'), {
//   ssr: false,
// });

function renderModalContent(view: MODAL_VIEWS) {
  switch (view) {
    case 'REGISTER':
      return <RegisterUserForm />;
    case 'LOGIN_VIEW':
      return <LoginUserForm />;
    case 'FORGOT_PASSWORD_VIEW':
      return <ForgotUserPassword />;
    default:
      return null;
  }
}

export default function ModalsContainer() {
  const { view, isOpen } = useModalState();
  const { closeModal } = useModalAction();

  // if (view === 'PROMO_POPUP_MODAL') {
  //   return <PromoPopup />;
  // }

  // if (view === 'REVIEW_POPUP_MODAL') {
  //   return <ReviewPopupModal />;
  // }

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view && renderModalContent(view)}
    </Modal>
  );
}
