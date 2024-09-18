import json
import google.generativeai as genai
import os

# Configure your API key
# os.environ['API_KEY'] = "<Insert your API Key here>"
# genai.configure(api_key=os.environ["API_KEY"])
genai.configure(api_key='AIzaSyBBUKqK68CF2N6ejKZkheZZx35D8iy2b0k')

# Load the products JSON from the file
with open('server/database/products.json', 'r') as file:
    products_data = json.load(file)

# Convert JSON data to a string format for including in the prompt
products_list_str = json.dumps(products_data["OCBCProducts"])

# Construct the prompt
prompt = f"""
    You are a chatbot for the bank OCBC.
    The very first message has been sent for you already, being:
        '
        Hello! Would you like to start achieving your financial goals today?
        '
    To which the customer has responded yes. 

    Having asked the following questions:
        1. What is your age?
        2. Singaporean, PR, or foreigner?
        3. Current Income?
        4. What are your current goals? Upcoming big-ticket expenses?
        5. How important is it for you to have immediate access to your funds, or can you afford to lock them away for a period?
        6. Are you interested in maximizing interest rates, minimizing fees, or both?
        7. Do you have any specific preferences or requirements?
    
    Based on the following OCBC products:
    {products_list_str}

    Construct a financial planning recommendation with the following requirements:
        1. It shall be in plain, non-jargon English.
        2. It shall only use products in the list provided above.
        3. It shall effectively meet the customer's needs.
        4. It shall detail which products should the customer take close notice of and why they would be advantageous to their specific situation.
"""

# Call the generative model with the constructed prompt
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content(prompt)

print(response.text)
