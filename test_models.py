import os
from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()
api_key = os.environ.get('ANTHROPIC_API_KEY')
if not api_key:
    print("NO API KEY FOUND IN .ENV!")
    exit(1)

client = Anthropic(api_key=api_key)

models_to_test = [
    "claude-opus-4-7",
    "claude-opus-4-5",
    "claude-3-5-sonnet-20241022",
    "claude-3-5-haiku-20241022",
    "claude-3-haiku-20240307",
    "claude-3-5-sonnet-latest",
]

print(f"Testing Anthropic API Key (ends with {api_key[-4:]})...")

working_models = []
for model in models_to_test:
    try:
        response = client.messages.create(
            model=model,
            max_tokens=5,
            messages=[{"role": "user", "content": "Hi"}]
        )
        print(f"[SUCCESS] Model '{model}' works!")
        working_models.append(model)
    except Exception as e:
        err_msg = str(e)
        if "not_found_error" in err_msg:
            print(f"[404] Model '{model}' is NOT reachable/available on this tier.")
        elif "insufficient_quota" in err_msg or "credit" in err_msg.lower():
            print(f"[QUOTA ERROR] Out of credits for '{model}'!")
            break
        else:
            print(f"[ERROR] '{model}' failed: {err_msg}")

if working_models:
    print(f"\n=> The best model to use is: {working_models[0]}")
else:
    print("\n=> NO MODELS WORKED! Your API key might be invalid, or completely out of credits, or restricted.")
