(ns circle.events
  (:require
    [circle.db :as db]
    [circle.modal :refer [modal-show]]
    [day8.re-frame.undo :as undo :refer [undoable]]
    [re-frame.core :as re-frame]))


(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    db/default-db))


(re-frame/reg-event-db
  :add-circle
  (undoable "Adding circle")
  (fn [db [_ ci]]
    (assoc-in db [:circles] (conj (:circles db) ci))))


(re-frame/reg-event-db
  :set-active-circle
  (undoable "Setting active circle")
  (fn [db [_ ci]]
    (modal-show)
    (assoc-in db [:active-circle] ci)))


(re-frame/reg-event-db
  :active-circle-changed
  (fn [db [_ circle size]]
    (assoc db :circles
           (conj
             (filter
               #(and (not= (:x %) (:x circle)) (not= (:y %) (:y circle)))
               (:circles db))
             (assoc circle :d size)))))
