import { BehaviorSubject } from "rxjs";

const currentModalSubject = new BehaviorSubject();
const currentRendgarSubject = new BehaviorSubject();

export const uiService = {
  currentModal: currentModalSubject.asObservable(),
  hideModal,
  currentRendgar: currentRendgarSubject,
  showModal,
  get currentModalValue() {
    return currentModalSubject.value;
  },
  get rendgar() {
    return currentRendgarSubject.value;
  }
};

function showModal(render) {
  currentModalSubject.next(true);
  currentRendgarSubject.next(render);
}

function hideModal() {
  currentModalSubject.next(false);
}
