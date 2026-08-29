"use client";

import { useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/next";

const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";

type Consent = "accepted" | "declined" | null;

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): Consent {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "accepted" || stored === "declined" ? stored : null;
}

function getServerSnapshot(): Consent {
  return null;
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const choose = (value: "accepted" | "declined") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <>
      {consent === "accepted" && <Analytics />}
      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#24262c] bg-[#131418]/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#a3a3ad]">
              This site uses privacy-friendly analytics to see what&apos;s working. No ads, no
              tracking cookies, no data sold.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={() => choose("declined")}
                className="text-sm font-semibold text-[#a3a3ad] hover:text-[#f2f1ec] px-4 py-2 transition-colors"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="text-sm font-semibold rounded-md bg-[#8b5cf6] hover:bg-[#a78bfa] text-[#08090b] px-4 py-2 transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
