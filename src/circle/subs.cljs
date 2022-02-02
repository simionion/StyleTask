(ns circle.subs
  (:require
    [re-frame.core :as re-frame]))

(re-frame/reg-sub
  :get-circles
  (fn [db]
    (:circles db)))

(re-frame/reg-sub
  :active-circle
  (fn [db]
    (:active-circle db)))
