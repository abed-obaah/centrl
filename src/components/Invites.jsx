import { Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { inviteGuests } from "../api/eventApi";
import { toast } from "sonner";

export default function Invites({ eventId, userId }) {
  const { token } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState("");

  const handleInviteGuests = async () => {
    if (!emails.length) return;

    setIsLoading(true);
    try {
      const response = await inviteGuests(eventId, emails, userId, token);

      // Handle the successful response
      if (response.status === "success") {
        toast.success("Invitations sent successfully!");
      }
      // Clear the form after successful submission
      setEmails([]);
      setShowInviteModal(false);
      // You might want to add a success message here
    } catch (error) {
      console.log("Failed to invite guests:", error);
      // You might want to add an error message here
    } finally {
      setIsLoading(false);
    }
  };

  const addEmail = () => {
    if (newEmail && isValidEmail(newEmail)) {
      setEmails([...emails, newEmail]);
      setNewEmail("");
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const removeEmail = (index) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-[761px] space-y-1 pb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-300 font-600">Invites</h2>

        <button
          onClick={() => setShowInviteModal(true)}
          className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-500 hover:bg-gray-50"
        >
          <Plus className="size-5" />
          <span>Invite Guests</span>
        </button>
      </div>

      {emails.length > 0 ? (
        <div className="overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-3">
          <h3 className="mb-1 text-200 font-500">Pending Invites</h3>
          <ul className="mt-2 space-y-2">
            {emails.map((email, index) => (
              <li key={index} className="flex justify-between">
                <span>{email}</span>
                <button
                  onClick={() => removeEmail(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleInviteGuests}
            disabled={isLoading}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Invitations"}
          </button>
        </div>
      ) : (
        <div className="overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-3">
          <h3 className="mb-1 text-200 font-500">No Invites sent</h3>
          <p className="text-50 text-gray-500">
            You can invite subscribers, contacts and past guests to the event.
          </p>
        </div>
      )}

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">
              Invite Guests by Email
            </h3>

            <div className="mb-4 space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1 flex gap-2">
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full rounded-md border p-2"
                    placeholder="Enter email address"
                  />
                  <button
                    onClick={addEmail}
                    disabled={!isValidEmail(newEmail)}
                    className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
                  >
                    Add
                  </button>
                </div>
              </div>

              {emails.length > 0 && (
                <div className="max-h-40 overflow-y-auto rounded border p-2">
                  <h4 className="mb-2 text-sm font-medium">
                    Emails to invite:
                  </h4>
                  <ul className="space-y-1">
                    {emails.map((email, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm">{email}</span>
                        <button
                          onClick={() => removeEmail(index)}
                          className="text-sm text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowInviteModal(false);
                  setEmails([]);
                }}
                className="rounded bg-gray-200 px-4 py-2"
              >
                Cancel
              </button>
              <button
                onClick={handleInviteGuests}
                disabled={isLoading || !emails.length}
                className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Invites"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
