import { useState } from 'react'
import { QueryForm } from '../components/QueryForm'
import type {
  QueryFormData,
  SubmissionMethod,
  SubmissionResult,
} from '../types/queryForm'
import { SUBMISSION_ADAPTERS } from '../utils/querySubmit'
import './QueryFormTest.css'

/* Phase 1 experiment — test page section: the query form plus a clearly
 * separated "Submission Method Test" panel. All four adapters run dry-run
 * only; nothing is sent anywhere. The mailto adapter additionally offers
 * an explicit button that opens the email client on demand. */

const METHOD_ORDER: SubmissionMethod[] = [
  'email-service',
  'google-forms',
  'backend-service',
  'mailto',
]

const METHOD_BLURBS: Record<SubmissionMethod, string> = {
  'email-service':
    'A. Payload is prepared locally. The service endpoint can be inserted later — nothing is sent.',
  'google-forms':
    'B. Adapter structure only. Google Form ID + field IDs will be added after the form is created.',
  'backend-service':
    'C. Provider-neutral interface. A Formspree/Web3Forms/FormSubmit endpoint can be plugged in later.',
  mailto:
    'D. Generates a readable mailto link locally. The email client opens only via the explicit button below.',
}

export function QueryFormTest() {
  const [method, setMethod] = useState<SubmissionMethod>('email-service')
  const [lastData, setLastData] = useState<QueryFormData | null>(null)
  const [result, setResult] = useState<SubmissionResult | null>(null)

  const runTest = (launch = false) => {
    if (!lastData) return
    setResult(SUBMISSION_ADAPTERS[method].submit(lastData, launch))
  }

  return (
    <section className="section" aria-labelledby="query-test-title">
      <div className="container container--narrow">
        <p className="eyebrow">Experimental — Phase 1</p>
        <h1 className="query-test__title" id="query-test-title">
          Tell Us About Your Project
        </h1>
        <p className="query-test__intro">
          Have an app idea, business requirement, or automation challenge?
          Tell us a little about it, and we&apos;ll get back to you.
        </p>

        <div className="query-test__card">
          <QueryForm
            onValidSubmit={(data) => {
              setLastData(data)
              setResult(SUBMISSION_ADAPTERS[method].submit(data))
            }}
          />
        </div>

        <div
          className="query-test__panel"
          aria-labelledby="query-test-panel-title"
        >
          <h2 id="query-test-panel-title">Submission Method Test</h2>
          <p className="query-test__panel-note">
            Development panel only. Select a mechanism, submit the form above,
            then run the dry-run test. No data leaves this browser (except an
            explicit mailto launch).
          </p>
          <div
            className="query-test__methods"
            role="radiogroup"
            aria-label="Submission method"
          >
            {METHOD_ORDER.map((value) => (
              <label key={value} className="query-test__method">
                <input
                  type="radio"
                  name="submission-method"
                  value={value}
                  checked={method === value}
                  onChange={() => {
                    setMethod(value)
                    setResult(null)
                  }}
                />
                {SUBMISSION_ADAPTERS[value].label}
              </label>
            ))}
          </div>
          <p className="query-test__blurb">{METHOD_BLURBS[method]}</p>
          <div className="query-test__panel-actions">
            <button
              type="button"
              className="btn btn--outline"
              disabled={!lastData}
              onClick={() => runTest(false)}
            >
              Run dry-run test
            </button>
            {method === 'mailto' && (
              <button
                type="button"
                className="btn btn--primary"
                disabled={!lastData}
                onClick={() => runTest(true)}
              >
                Open email client
              </button>
            )}
          </div>
          {!lastData && (
            <p className="query-test__hint">
              Submit the form above with valid details to enable the test.
            </p>
          )}
          {result && (
            <div className="query-test__result" role="status">
              <p className="query-test__result-message">{result.message}</p>
              {result.preview && (
                <pre className="query-test__preview">{result.preview}</pre>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
